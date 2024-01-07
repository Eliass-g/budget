import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [users, setUsers] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [budgetsOfCategory, setBudgetOfCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [expensesOfCategory, setExpensesOfCategory] = useState([]);
  const [finances, setFinances] = useState([]);

  const getUsers = async () => {
    console.log('n');
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
  };

  const addCategory = async (category) => {
    try {
      const result = await axios({
        url: "/insert/category",
        method: "POST",
        data: category,
      });
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
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
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBudget = async (id) => {
    try {
      const result = await axios({
        url: "/update/budget",
        method: "DELETE",
        data: id,
      });
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const result = await axios({
        url: "/update/category",
        method: "DELETE",
        data: id,
      });
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFinance = async (id) => {
    try {
      const result = await axios({
        url: "/update/finance",
        method: "DELETE",
        data: id,
      });
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const result = await axios({
        url: "/update/expense",
        method: "DELETE",
        data: id,
      });
      useEffect(() => {
        getBudgets();
        getCategories();
        getExpenses();
        getFinances();
      }, []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
    getBudgets();
    getCategories();
    getExpenses();
    getFinances();
  }, []);

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