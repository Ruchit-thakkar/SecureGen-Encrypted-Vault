const express = require("express");
const router = express.Router();
const vaultController = require("../controllers/vault.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

router.use(authMiddleware);

// CRUD Routes
router.post("/add", vaultController.createEntry);
router.get("/all", vaultController.getEntries);
router.put("/update/:id", vaultController.updateEntry);
router.delete("/delete/:id", vaultController.deleteEntry);

module.exports = router;
