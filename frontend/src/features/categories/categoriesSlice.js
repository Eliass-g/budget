import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  categories: [],
  status: {
    categories: "idle",
    addCategory: "idle",
    updateCategory: "idle",
    deleteCategory: "idle",
  },
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status.categories = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status.categories = "succeeded";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status.categories = "failed";
      })
      .addCase(addCategory.pending, (state, action) => {
        state.status.addCategory = "loading";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
        state.status.addCategory = "succeeded";
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.status.addCategory = "failed";
      })
      .addCase(updateCategory.pending, (state, action) => {
        state.status.updateCategory = "loading";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        var index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
        state.status.updateCategory = "succeeded";
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status.updateCategory = "failed";
      })
      .addCase(deleteCategory.pending, (state, action) => {
        state.status.deleteCategory = "loading";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id != action.payload.id
        );
        state.status.deleteCategory = "succeeded";
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status.deleteCategory = "failed";
      });
  },
});

export const getCategories = createAsyncThunk(
  "budgets/getCategories",
  async () => {
    const response = await axios({
      url: "/attain/categories",
      method: "GET",
    });
    return response.data.data;
  }
);

export const addCategory = createAsyncThunk(
  "budgets/addCategory",
  async (category) => {
    const response = await axios({
      url: "/insert/category",
      method: "POST",
      data: category,
    });
    return response.data.data;
  }
);

export const updateCategory = createAsyncThunk(
  "budgets/updateCategory",
  async (params) => {
    const { category, id } = params;
    const response = await axios({
      url: "/update/category",
      method: "PUT",
      data: {
        category,
        id,
      },
    });
    return response.data.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "budgets/deleteCategory",
  async (id) => {
    const response = await axios({
      url: "/update/category",
      method: "DELETE",
      data: { id },
    });
    return response.data.data;
  }
);

export const selectCategories = (state) => state.categories.categories;
export const selectCategoriesStatus = (state) =>
  state.categories.status.categories;
// Action creators are generated for each case reducer function
export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
