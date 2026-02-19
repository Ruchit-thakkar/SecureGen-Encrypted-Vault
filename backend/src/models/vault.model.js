const mongoose = require("mongoose");

const vaultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    // 👇 NEW FIELD ADDED
    securityLevel: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    category: {
      type: String,
      enum: ["Social", "Banking", "Work", "Other"],
      default: "Other",
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Vault", vaultSchema);
