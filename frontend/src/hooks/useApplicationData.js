import { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001';

const useApplicationData = () => {
  const [users, setUsers] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [budgetsOfCategory, setBudgetOfCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [expensesOfCategory, setExpensesOfCategory] = useState([]);
  const [finances, setFinances] = useState([]);
  const [change, setChange] = useState([false]);

  

  const getUsers = async () => {
    try {
      const result = await axios({
        url: "/users/",
        method: "GET",
      });
      setUsers(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (first_name, last_name, email, password) => {
    try {
      const result = await axios({
        url: "/users/register",
        method: "POST",
        data: {
          first_name,
          last_name,
          email,
          password,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const loginUser = async (email, password) => {
    try {
      const result = await axios({
        url: "/users/login",
        method: "POST",
        data: {
          email,
          password,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const logoutUser = async () => {
    try {
      const result = await axios({
        url: "/users/logout",
        method: "POST",
      });
      setBudgets([]);
      setCategories([]);
      setExpenses([]);
      setFinances([]);
      setBudgetOfCategory([]);
      setExpensesOfCategory([]);
    } catch (err) {
      console.log(err);
    }
  };

  const getBudgets = async () => {
    try {
      const result = await axios({
        url: "/attain/budget",
        method: "GET",
      });

      setBudgets(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBudgetOfCategory = async (category_id) => {
    try {
      const result = await axios({
        url: "/attain/budget/category",
        method: "GET",
        data: category_id,
      });

      setBudgetOfCategory(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      const result = await axios({
        url: "/attain/categories",
        method: "GET",
      });

      setCategories(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getExpenses = async () => {
    try {
      const result = await axios({
        url: "/attain/expenses",
        method: "GET",
      });

      setExpenses(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getExpensesOfCategory = async (category_id) => {
    try {
      const result = await axios({
        url: "/attain/expenses/category",
        method: "GET",
        data: category_id,
      });

      setExpensesOfCategory(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getFinances = async () => {
    try {
      const result = await axios({
        url: "/attain/finances",
        method: "GET",
      });

      setFinances(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addBudget = async (
    category_id,
    allocated_amount,
    total_amount,
    duration
  ) => {
    try {
      const result = await axios({
        url: "/insert/budget",
        method: "POST",
        data: {
          category_id,
          allocated_amount,
          total_amount,
          duration,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const addCategory = async (category) => {
    try {
      const result = await axios({
        url: "/insert/category",
        method: "POST",
        data: category,
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const addFinance = async (source, amount, duration, fixed) => {
    try {
      const result = await axios({
        url: "/insert/finance",
        method: "POST",
        data: {
          source,
          amount,
          duration,
          fixed,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const addExpense = async (category_id, amount) => {
    try {
      const result = await axios({
        url: "/insert/expense",
        method: "POST",
        data: {
          category_id,
          amount,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const updateBudget = async (
    category_id,
    allocated_amount,
    total_amount,
    duration,
    id
  ) => {
    try {
      const result = await axios({
        url: "/update/budget",
        method: "PUT",
        data: {
          category_id,
          allocated_amount,
          total_amount,
          duration,
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const updateCategory = async (category, id) => {
    try {
      const result = await axios({
        url: "/update/category",
        method: "PUT",
        data: {
          category,
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const updateFinance = async (source, amount, duration, fixed, id) => {
    try {
      const result = await axios({
        url: "/update/finance",
        method: "PUT",
        data: {
          source,
          amount,
          duration,
          fixed,
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const updateExpense = async (category_id, amount, id) => {
    try {
      const result = await axios({
        url: "/update/category",
        method: "PUT",
        data: {
          category_id,
          amount,
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const deleteBudget = async (id) => {
    try {
      const result = await axios({
        url: "/update/budget",
        method: "DELETE",
        data: id,
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const deleteCategory = async (id) => {
    try {
      const result = await axios({
        url: "/update/category",
        method: "DELETE",
        data: id,
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const deleteFinance = async (id) => {
    try {
      const result = await axios({
        url: "/update/finance",
        method: "DELETE",
        data: id,
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  const deleteExpense = async (id) => {
    try {
      const result = await axios({
        url: "/update/expense",
        method: "DELETE",
        data: id,
      });
    } catch (err) {
      console.log(err);
    }
    setChange(!change);
  };

  useEffect(() => {
    getUsers();
    getBudgets();
    getCategories();
    getExpenses();
    getFinances();
  }, []);

  useEffect(() => {
    getUsers();
    getBudgets();
    getCategories();
    getExpenses();
    getFinances();
  }, [change]);

  return {
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
  };
};

export default useApplicationData;
