const db = require('../connection');

//add budget

const addBudget = async (user_id, data) => {
  const queryDef = {
    text: `INSERT INTO budget (user_id, category_id, allocated_amount, total_amount, duration)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`, 
    values: [user_id, data.category_id, data.allocated_amount, data.total_amount, data.duration],
    };
    const result = await db.query(queryDef);
    return result.rows[0];
};

//add category

const addCategory = async (user_id, data) => {
  const queryDef = {
    text: `INSERT INTO categories (user_id, category)
    VALUES ($1, $2) RETURNING *;`, 
    values: [user_id, data.category],
    };
    const result = await db.query(queryDef);
    return result.rows[0];
};

//add finances

const addFinance = async (user_id, data) => {
  const queryDef = {
    text: `INSERT INTO finances (user_id, source, amount, duration, fixed) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`, 
    values: [user_id, data.source, data.amount, data.duration, data.fixed],
    };
    const result = await db.query(queryDef);
    return result.rows[0];
};

//add expense

const addExpense = async (user_id, data) => {
  const queryDef = {
    text: `INSERT INTO expenses (user_id, category_id, expense, amount)
    VALUES ($1, $2, $3, $4) RETURNING *;`,
    values: [user_id, data.category_id, data.expense, data.amount],
    };
    const result = await db.query(queryDef);
    return result.rows[0];
};

module.exports = { addBudget, addCategory, addFinance, addExpense };