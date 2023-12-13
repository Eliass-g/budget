const db = require('../connection');

const getUsers = async () => {
  const data = await db.query('SELECT * FROM users;');
  return data.rows;    
};

const getUserWithEmail = async (email) => {
  const queryDef = {
  text: `SELECT * FROM users WHERE email = $1 LIMIT 1;`, 
  values: [email],
  };
  const data = await db.query(queryDef);
  return data.rows[0];
};

const addUser = async (user) => {
  const queryDef = {
    text: `INSERT INTO users (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4) RETURNING *;`, 
    values: [user.first_name, user.last_name, user.email, user.password],
    };
    const data = await db.query(queryDef);
    return data.rows[0];
};

module.exports = { getUsers, getUserWithEmail, addUser };