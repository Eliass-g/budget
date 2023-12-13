const express = require("express");
const router = express.Router();
const {
  addBudget,
  addCategory,
  addFinance,
  addExpense,
} = require("../db/queries/insert");

router.post("/budget", async (req, res) => {
  try {
    const user_id = req.session.userId;
    const data = await addBudget(user_id, req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/category", async (req, res) => {
  try {
    const user_id = req.session.userId;
    const data = await addCategory(user_id, req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/finance", async (req, res) => {
  try {
    const user_id = req.session.userId;
    const data = await addFinance(user_id, req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/expense", async (req, res) => {
  try {
    const user_id = req.session.userId;
    const data = await addExpense(user_id, req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
