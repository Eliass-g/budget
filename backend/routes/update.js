const express = require("express");
const router = express.Router();
const {
  updateBudget,
  updateCategory,
  updateFinance,
  updateExpense,
  deleteBudget,
  deleteCategory,
  deleteFinance,
  deleteExpense,
} = require("../db/queries/update");

router.put('/budget', async (req, res) => {
  try {
    const data = await updateBudget(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.put('/category', async (req, res) => {
  try {
    const data = await updateCategory(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.put('/finance', async (req, res) => {
  try {
    const data = await updateFinance(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.put('/expense', async (req, res) => {
  try {
    const data = await updateExpense(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.delete('/budget', async (req, res) => {
  try {
    const data = await deleteBudget(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.delete('/category', async (req, res) => {
  try {
    const data = await deleteCategory(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.delete('/finance', async (req, res) => {
  try {
    const data = await deleteFinance(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.delete('/expense', async (req, res) => {
  try {
    const data = await deleteExpense(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

module.exports = router;
