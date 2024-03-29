import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  budgets: [],
  budgetsOfCategory: [],
  status: {
    budgets: "idle",
    budgetsOfCategory: "idle",
    addBudget: "idle",
    updateBudget: "idle",
    deleteBudget: "idle",
  },
};

export const budgetsSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBudgets.pending, (state, action) => {
        state.status.budgets = "loading";
      })
      .addCase(getBudgets.fulfilled, (state, action) => {
        state.budgets = action.payload;
        state.status.budgets = "succeeded";
      })
      .addCase(getBudgets.rejected, (state, action) => {
        state.status.budgets = "failed";
      })
      .addCase(getBudgetOfCategory.pending, (state, action) => {
        state.status.budgetsOfCategory = "loading";
      })
      .addCase(getBudgetOfCategory.fulfilled, (state, action) => {
        state.budgetsOfCategory = action.payload;
        state.status.budgetsOfCategory = "succeeded";
      })
      .addCase(getBudgetOfCategory.rejected, (state, action) => {
        state.status.budgetsOfCategory = "failed";
      })
      .addCase(addBudget.pending, (state, action) => {
        state.status.addBudget = "loading";
      })
      .addCase(addBudget.fulfilled, (state, action) => {
        state.budgets.push(action.payload);
        state.status.addBudget = "succeeded";
      })
      .addCase(addBudget.rejected, (state, action) => {
        state.status.addBudget = "failed";
      })
      .addCase(updateBudget.pending, (state, action) => {
        state.status.updateBudget = "loading";
      })
      .addCase(updateBudget.fulfilled, (state, action) => {
        var index = state.budgets.findIndex((x) => x.id === action.payload.id);
        if (index == !-1) {
          state.budgets[index] = action.payload;
        }
        state.status.updateBudget = "succeeded";
      })
      .addCase(updateBudget.rejected, (state, action) => {
        state.status.updateBudget = "failed";
      })
      .addCase(deleteBudget.pending, (state, action) => {
        state.status.deleteBudget = "loading";
      })
      .addCase(deleteBudget.fulfilled, (state, action) => {
        state.budgets = state.budgets.filter(
          (budget) => budget.id != action.payload.id
        );
        state.status.deleteBudget = "succeeded";
      })
      .addCase(deleteBudget.rejected, (state, action) => {
        state.status.deleteBudget = "failed";
      })
      .addCase(updateBudgetAmount.pending, (state, action) => {
        state.status.updateBudgetAmount = "loading";
      })
      .addCase(updateBudgetAmount.fulfilled, (state, action) => {
        var index = state.budgets.findIndex((x) => x.id === action.payload.id);
        if (index == !-1) {
          state.budgets[index].allocated_amount = action.payload.allocated_amount;
        }
        state.status.updateBudgetAmount = "succeeded";
      })
      .addCase(updateBudgetAmount.rejected, (state, action) => {
        state.status.updateBudgetAmount = "failed";
      })
  },
});

export const getBudgets = createAsyncThunk("budgets/getBudgets", async () => {
  const response = await axios({
    url: "/attain/budget",
    method: "GET",
  });
  return response.data.data;
});

export const getBudgetOfCategory = createAsyncThunk(
  "budgets/getBudgetOfCategory",
  async (category_id) => {
    const response = await axios({
      url: "/attain/budget/category",
      method: "GET",
      data: category_id,
    });
    return response.data.data;
  }
);

export const addBudget = createAsyncThunk(
  "budgets/addBudget",
  async (params) => {
    const { name, category_id, allocated_amount, total_amount, duration } =
      params;
    const response = await axios({
      url: "/insert/budget",
      method: "POST",
      data: {
        name,
        category_id,
        allocated_amount,
        total_amount,
        duration,
      },
    });
    return response.data.data;
  }
);

export const updateBudget = createAsyncThunk(
  "budgets/updateBudget",
  async (params) => {
    const { name, category_id, allocated_amount, total_amount, duration, id } =
      params;
    const response = await axios({
      url: "/update/budget",
      method: "PUT",
      data: {
        name,
        category_id,
        allocated_amount,
        total_amount,
        duration,
        id,
      },
    });
    return response.data.data;
  }
);

export const updateBudgetAmount = createAsyncThunk(
  "budgets/updateAmountofBudget",
  async (params) => {
    const { allocated_amount, id } =
      params;
    const response = await axios({
      url: "/update/budgetAmount",
      method: "PUT",
      data: {
        allocated_amount,
        id,
      },
    });
    return response.data.data;
  }
);

export const deleteBudget = createAsyncThunk(
  "budgets/deleteBudget",
  async (id) => {
    const response = await axios({
      url: "/update/budget",
      method: "DELETE",
      data: { id },
    });
    return response.data.data;
  }
);

export const selectBudgets = (state) => state.budgets.budgets;
export const selectBudgetStatus = (state) => state.budgets.status.budgets;
// Action creators are generated for each case reducer function
export const {} = budgetsSlice.actions;

export default budgetsSlice.reducer;
