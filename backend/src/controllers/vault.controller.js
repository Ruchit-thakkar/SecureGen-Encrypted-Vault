const crypto = require("crypto");
const vaultModel = require("../models/vault.model");

// ==============================
// 🔐 ENCRYPTION SETUP
// ==============================
const rawKey = process.env.ENCRYPTION_KEY || "SecureGen_Fallback_Secret_Word";

// 🎯 THE FIX: This turns ANY string into a perfect 32-byte buffer
const SECRET_KEY = crypto.createHash("sha256").update(rawKey).digest();

const IV_LENGTH = 16;

function encryptText(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  // Pass SECRET_KEY directly, no need for Buffer.from() anymore
  const cipher = crypto.createCipheriv("aes-256-cbc", SECRET_KEY, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decryptText(text) {
  try {
    const textParts = text.split(":");
    const iv = Buffer.from(textParts.shift(), "hex");
    const encryptedText = Buffer.from(textParts.join(":"), "hex");
    // Pass SECRET_KEY directly here too
    const decipher = crypto.createDecipheriv("aes-256-cbc", SECRET_KEY, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (error) {
    return "Decryption Failed";
  }
}
// ==============================
// 📦 VAULT CRUD
// ==============================

module.exports.createEntry = async (req, res) => {
  try {
    const { title, password, category, description } = req.body;

    let securityLevel = 0;
    if (password.length > 8) securityLevel++;
    if (/[A-Z]/.test(password)) securityLevel++;
    if (/[0-9]/.test(password)) securityLevel++;
    if (/[^A-Za-z0-9]/.test(password)) securityLevel++;
    if (password.length > 12) securityLevel = 5;

    // 🔒 Encrypt the actual password before saving
    const encryptedPassword = encryptText(password);

    const newEntry = await vaultModel.create({
      userId: req.user._id,
      title,
      password: encryptedPassword,
      category: category || "Other",
      description,
      securityLevel,
    });

    // 🔓 Decrypt it right back so the frontend gets the real password immediately
    const entryData = newEntry.toObject();
    entryData.password = decryptText(entryData.password);

    res.status(201).json({ success: true, data: entryData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.getEntries = async (req, res) => {
  try {
    const entries = await vaultModel
      .find({ userId: req.user._id })
      .sort({ createdAt: -1 });

    // 🔓 Decrypt EVERY password from the database before sending to frontend
    const decryptedEntries = entries.map((entry) => {
      const entryObj = entry.toObject();
      entryObj.password = decryptText(entryObj.password); // Turns hash back into real password
      return entryObj;
    });

    res.status(200).json({ success: true, data: decryptedEntries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.updateEntry = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // 🔒 If they are updating the password, encrypt the new one
    if (updateData.password) {
      updateData.password = encryptText(updateData.password);
    }

    const updatedEntry = await vaultModel.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      updateData,
      { new: true },
    );

    // 🔓 Decrypt the updated entry to send the real password back to React
    const entryData = updatedEntry.toObject();
    entryData.password = decryptText(entryData.password);

    res.status(200).json({ success: true, data: entryData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.deleteEntry = async (req, res) => {
  try {
    await vaultModel.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    res.status(200).json({ success: true, message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
