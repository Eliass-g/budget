import React from "react";
import LoginPage from "./features/users/LoginPage.jsx";
import RegisterPage from "./features/users/RegisterPage.jsx";
import { Routes, Route, Link } from "react-router-dom";
import BudgetList from "./features/budgets/BudgetList.js";
import AddBudget from "./features/budgets/AddBudget.js";
import CategoryList from "./features/categories/CategoryList.js";
import AddCategory from "./features/categories/AddCategory.js";
import Index from "./pages/Index.js";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/index">Index</Link>
          </li>
          <li>
            <Link to="/budgets">Budgets</Link>
          </li>
          <li>
            <Link to="/addBudget">Add Budget</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/addCategory">Add Category</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/index" element={<Index />} />
        <Route path="/budgets" element={<BudgetList />} />
        <Route path="/addBudget" element={<AddBudget />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/addCategory" element={<AddCategory />} />
      </Routes>
    </>
  );
}

export default App;
