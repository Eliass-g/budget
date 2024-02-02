import React from "react";
import LoginPage from "./features/users/LoginPage.jsx";
import RegisterPage from "./features/users/RegisterPage.jsx";
import { Routes, Route, Link } from "react-router-dom";
import BudgetList from "./features/budgets/BudgetList.js";
import AddBudget from "./features/budgets/AddBudget.js";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/budgets">Budgets</Link>
          </li>
          <li>
            <Link to="/addBudget">Add Budget</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/budgets" element={<BudgetList />} />
        <Route path="/addBudget" element={<AddBudget />} />
      </Routes>
    </>
  );
}

export default App;
