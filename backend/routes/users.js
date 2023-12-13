/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { getUsers, getUserWithEmail, addUser } = require("../db/queries/users");

router.get("/", async (req, res) => {
  try {
    const data = await getUsers();
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/register", async (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  try {
    const data = await addUser(user);
    req.session.userId = data.id;
    
    res.json({ data });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const data = await getUserWithEmail(email);
    if (!data) {
      return res.send({ error: "no user with that id" });
    }
    if (!bcrypt.compareSync(password, data.password)) {
      return res.send({ error: "error" });
    }
    req.session.userId = data.id;
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/logout", async (req, res) => {
  try {
    req.session.userId = null;
    res.send({});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
