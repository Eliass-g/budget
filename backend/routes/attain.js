const express = require("express");
const router = express.Router();
const {
  getBudget,
  getBudgetOfCategory,
  getCategories,
  getExpenses,
  getExpensesOfCategory,
  getFinances,
} = require("../db/queries/attain");

router.get("/budget", async (req, res) => {
  try {
    const data = await getBudget(req.session.userId);
    res.json({ data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/budget/category", async (req, res) => {
  try {
    const data = await getBudgetOfCategory(req.session.userId, req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/categories", async (req, res) => {
  try {
    const data = await getCategories(req.session.userId);
    res.json({ data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/expenses", async (req, res) => {
  try {
    const data = await getExpenses(req.session.userId);
    res.json({ data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/expenses/category", async (req, res) => {
  try {
    const data = await getExpensesOfCategory(req.session.userId, req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/finances", async (req, res) => {
  try {
    const data = await getFinances(req.session.userId);
    res.json({ data });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
