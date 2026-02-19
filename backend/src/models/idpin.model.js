const mongoose = require("mongoose");

const idpinSchema = new mongoose.Schema(
  {
    // ... your existing fields (username, email, password etc) ...

    // 👇 ADD THIS NEW FIELD
    vaultPin: {
      type: String,
      default: null, // If null, the user hasn't set up the vault yet
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Idpin", idpinSchema);
