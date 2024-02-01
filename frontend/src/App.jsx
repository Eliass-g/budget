import React from "react";
import useApplicationData from "./hooks/useApplicationData.js";
import LoginPage from "./features/users/LoginPage.jsx";
import RegisterPage from "./features/users/RegisterPage.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const {
    users,
    registerUser,
    loginUser,
    logoutUser,
    budgets,
    budgetsOfCategory,
    categories,
    expenses,
    expensesOfCategory,
    finances,
    getBudgetOfCategory,
    getExpensesOfCategory,
    addBudget,
    addCategory,
    addFinance,
    addExpense,
    updateBudget,
    updateCategory,
    updateFinance,
    updateExpense,
    deleteBudget,
    deleteCategory,
    deleteFinance,
    deleteExpense,
  } = useApplicationData();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;