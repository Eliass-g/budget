import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  expenses: [],
  expensesOfCategory: [],
  status: {
    expenses: "idle",
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
        state.status.expenses = "succeeded";
        state.expenses = action.payload;
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.status.expenses = "failed";
      })
      .addCase(getExpensesOfCategory.pending, (state, action) => {
        state.status.expensesOfCategory = "loading";
      })
      .addCase(getExpensesOfCategory.fulfilled, (state, action) => {
        state.status.expensesOfCategory = "succeeded";
        state.expensesOfCategory = action.payload;
      })
      .addCase(getExpensesOfCategory.rejected, (state, action) => {
        state.status.expensesOfCategory = "failed";
      })
      .addCase(addExpense.pending, (state, action) => {
        state.status.addExpense = "loading";
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.status.addExpense = "succeeded";
        state.expenses.push(action.payload);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.status.addExpense = "failed";
      })
      .addCase(updateExpense.pending, (state, action) => {
        state.status.updateExpense = "loading";
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        state.status.updateExpense = "succeeded";
        state.expenses.push(action.payload);
        var index = state.expenses.findIndex(
          (expense) => expense.id === action.payload.id
        );
        if (index !== -1) {
          state.expenses[index] = action.payload;
        }
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.status.updateExpense = "failed";
      })
      .addCase(deleteExpense.pending, (state, action) => {
        state.status.deleteExpense = "loading";
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.status.deleteExpense = "succeeded";
        state.expenses = state.expenses.filter(
          (expense) => expense.id != action.payload.id
        );
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
    const { category_id, amount } = params;
    const result = await axios({
      url: "/insert/expense",
      method: "POST",
      data: {
        category_id,
        amount,
      },
    });
    return response.data.data;
  }
);

export const updateExpense = createAsyncThunk(
  "budgets/updateExpense",
  async (params) => {
    const { category_id, amount, id } = params;
    const response = await axios({
      url: "/update/category",
      method: "PUT",
      data: {
        category_id,
        amount,
        id,
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
      data: id,
    });
    return response.data.data;
  }
);

export const selectExpenses = (state) => state.expenses.expenses;
export const selectExpensesOfCategory = (state) => state.expenses.expensesOfCategory;
// Action creators are generated for each case reducer function
export const {} = expensesSlice.actions;

export default expensesSlice.reducer;
