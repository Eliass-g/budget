const db = require("../connection");

//get all budgets

const getBudget = async (user_id) => {
  const queryDef = {
    text: `SELECT * FROM budget WHERE user_id = $1;`,
    values: [user_id],
  };
  const data = await db.query(queryDef);
  return data.rows;
};

//get budgets of specific category

const getBudgetOfCategory = async (user_id, info) => {
  const queryDef = {
    text: `SELECT * FROM budget WHERE user_id = $1 AND category_id = $2;`,
    values: [user_id, info.category_id],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
};

//get categories

const getCategories = async (user_id) => {
  const queryDef = {
    text: `SELECT * FROM categories WHERE user_id = $1;`,
    values: [user_id],
  };
  const data = await db.query(queryDef);
  return data.rows;
};

//get all expenses

const getExpenses = async (user_id) => {
  const queryDef = {
    text: `SELECT * FROM expenses WHERE user_id = $1;`,
    values: [user_id],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
};

const getExpensesOfBudget = async (user_id, info) => {
  console.log(user_id, info);
  const queryDef = {
    text: `SELECT * FROM expenses WHERE user_id = $1 AND budget_id = $2;`,
    values: [user_id, info.budget_id],
  };
  const data = await db.query(queryDef);
  return data.rows;
};

//get expenses for specific category

const getExpensesOfCategory = async (user_id, info) => {
  const queryDef = {
    text: `SELECT * FROM expenses WHERE user_id = $1 AND category_id = $2;`,
    values: [user_id, info.category_id],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
};

//get all finances

const getFinances = async (user_id) => {
  const queryDef = {
    text: `SELECT * FROM finances WHERE user_id = $1;`,
    values: [user_id],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
};

module.exports = {
  getBudget,
  getExpensesOfBudget,
  getBudgetOfCategory,
  getCategories,
  getExpenses,
  getExpensesOfCategory,
  getFinances,
};
