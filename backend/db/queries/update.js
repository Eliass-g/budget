const db = require("../connection");

//update budget

const updateBudgetAmount = async (data) => {
  const queryDef = {
    text: `UPDATE budget SET allocated_amount = $1 WHERE id = $2 RETURNING *;`,
    values: [data.allocated_amount, data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//update budget

const updateBudget = async (data) => {
  const queryDef = {
    text: `UPDATE budget SET category_id = $1, allocated_amount = $2, total_amount = $3, duration = $4, name = $5 WHERE id = $6 RETURNING *;`,
    values: [
      data.category_id,
      data.allocated_amount,
      data.total_amount,
      data.duration,
      data.name,
      data.id,
    ],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//update category

const updateCategory = async (data) => {
  const queryDef = {
    text: `UPDATE categories SET category = $1 WHERE id = $2 RETURNING *;`,
    values: [data.category, data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//update finance

const updateFinance = async (data) => {
  const queryDef = {
    text: `UPDATE finances SET source = $1, amount = $2, duration = $3, fixed = $4 WHERE id = $5 RETURNING *;`,
    values: [data.source, data.amount, data.duration, data.fixed, data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//update expense

const updateExpense = async (data) => {
  const queryDef = {
    text: `UPDATE expenses SET category_id = $1, amount = $2 WHERE id = $3 RETURNING *;`,
    values: [data.category_id, data.amount, data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//delete budget

const deleteBudget = async (data) => {
  const queryDef = {
    text: `DELETE FROM budget WHERE id = $1 RETURNING *;`,
    values: [data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//delete category

const deleteCategory = async (data) => {
  const queryDef = {
    text: `DELETE FROM categories WHERE id = $1 RETURNING *;`,
    values: [data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//delete finance

const deleteFinance = async (data) => {
  const queryDef = {
    text: `DELETE FROM finances WHERE id = $1 RETURNING *;`,
    values: [data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

//delete expense

const deleteExpense = async (data) => {
  const queryDef = {
    text: `DELETE FROM expenses WHERE id = $1 RETURNING *;`,
    values: [data.id],
  };
  const result = await db.query(queryDef);
  return result.rows[0];
};

module.exports = {
  updateBudget,
  updateBudgetAmount,
  updateCategory,
  updateFinance,
  updateExpense,
  deleteBudget,
  deleteCategory,
  deleteFinance,
  deleteExpense,
};
