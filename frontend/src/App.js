import React from "react";
import useApplicationData from "./hooks/useApplicationData.js";

function App() {
  
  const { users,
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
    deleteExpense, } = useApplicationData();

  return <div className="App">
    
  </div>;
}

export default App;
