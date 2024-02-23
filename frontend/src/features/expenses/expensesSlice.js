import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateBudgetAmount } from "../budgets/budgetsSlice";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  expenses: [],
  expensesOfBudget: [],
  expensesOfCategory: [],
  allocated_amount: 0,
  status: {
    expenses: "idle",
    expensesOfBudget: "idle",
    expensesOfCategory: "idle",
    addExpense: "idle",
    updateExpense: "idle",
    deleteExpense: "idle",
  },
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getExpenses.pending, (state, action) => {
        state.status.expenses = "loading";
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.expenses = action.payload;
        state.status.expenses = "succeeded";
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.status.expenses = "failed";
      })
      .addCase(getExpensesOfCategory.pending, (state, action) => {
        state.status.expensesOfCategory = "loading";
      })
      .addCase(getExpensesOfCategory.fulfilled, (state, action) => {
        state.expensesOfCategory = action.payload;
        state.status.expensesOfCategory = "succeeded";
      })
      .addCase(getExpensesOfCategory.rejected, (state, action) => {
        state.status.expensesOfCategory = "failed";
      })
      .addCase(getExpensesOfBudget.pending, (state, action) => {
        state.status.expensesOfBudget = "loading";
      })
      .addCase(getExpensesOfBudget.fulfilled, (state, action) => {
        state.expensesOfBudget = action.payload;
        state.status.expensesOfBudget = "succeeded";
      })
      .addCase(getExpensesOfBudget.rejected, (state, action) => {
        state.status.expensesOfBudget = "failed";
      })
      .addCase(addExpense.pending, (state, action) => {
        state.status.addExpense = "loading";
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
        state.expensesOfBudget.push(action.payload);
        state.allocated_amount = state.expensesOfBudget.reduce(function (
          acc,
          obj
        ) {
          return acc + obj.amount;
        },
        0);
        console.log(state.allocated_amount);
        state.status.addExpense = "succeeded";
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.status.addExpense = "failed";
      })
      .addCase(updateExpense.pending, (state, action) => {
        state.status.updateExpense = "loading";
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        var index = state.expensesOfBudget.findIndex(
          (expense) => expense.id === action.payload.id
        );
        if (index !== -1) {
          state.expensesOfBudget[index] = action.payload;
        }
        state.allocated_amount = state.expensesOfBudget.reduce(function (
          acc,
          obj
        ) {
          return acc + obj.amount;
        },
        0);
        state.status.updateExpense = "succeeded";
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.status.updateExpense = "failed";
      })
      .addCase(deleteExpense.pending, (state, action) => {
        state.status.deleteExpense = "loading";
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expensesOfBudget = state.expensesOfBudget.filter(
          (expense) => expense.id != action.payload.id
        );
        state.allocated_amount = state.expensesOfBudget.reduce(function (
          acc,
          obj
        ) {
          return acc + obj.amount;
        },
        0);
        state.status.deleteExpense = "succeeded";
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.status.deleteExpense = "failed";
      });
  },
});

export const getExpenses = createAsyncThunk("budgets/getExpenses", async () => {
  const response = await axios({
    url: "/attain/expenses",
    method: "GET",
  });
  return response.data.data;
});

export const getExpensesOfBudget = createAsyncThunk(
  "budgets/getExpensesOfBudget",
  async (budget_id) => {
    const response = await axios({
      url: "/attain/expenses/budget",
      method: "POST",
      data: { budget_id },
    });
    return response.data.data;
  }
);

export const getExpensesOfCategory = createAsyncThunk(
  "budgets/getExpensesOfCategory",
  async (category_id) => {
    const response = await axios({
      url: "/attain/expenses/category",
      method: "GET",
      data: category_id,
    });
    return response.data.data;
  }
);

export const addExpense = createAsyncThunk(
  "budgets/addExpense",
  async (params) => {
    const { budget_id, expense_name, amount } = params;
    const response = await axios({
      url: "/insert/expense",
      method: "POST",
      data: {
        budget_id,
        expense_name,
        amount,
      },
    });
    return response.data.data;
  }
);

export const updateExpense = createAsyncThunk(
  "budgets/updateExpense",
  async (params) => {
    const { id, expense_name, amount, budget_id } = params;
    const response = await axios({
      url: "/update/expense",
      method: "PUT",
      data: {
        id,
        expense_name,
        amount,
        budget_id,
      },
    });
    return response.data.data;
  }
);

export const deleteExpense = createAsyncThunk(
  "budgets/deleteExpense",
  async (id) => {
    const response = await axios({
      url: "/update/expense",
      method: "DELETE",
      data: { id },
    });
    return response.data.data;
  }
);

export const selectExpenses = (state) => state.expenses.expenses;
export const selectAmount = (state) => state.expenses.allocated_amount;
export const selectExpensesOfBudget = (state) =>
  state.expenses.expensesOfBudget;
export const selectExpensesOfCategory = (state) =>
  state.expenses.expensesOfCategory;
export const selectExpensesStatus = (state) => state.expenses.status.expenses;
export const selectExpensesOfBudgetStatus = (state) =>
  state.expenses.status.expensesOfBudget;
// Action creators are generated for each case reducer function
export const {} = expensesSlice.actions;

export default expensesSlice.reducer;
