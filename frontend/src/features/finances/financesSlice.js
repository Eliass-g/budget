import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  finances: [],
  status: {
    finances: "idle",
    addFinances: "idle",
    updateFinances: "idle",
    deleteFinances: "idle",
  },
};

export const financesSlice = createSlice({
  name: "finances",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFinances.pending, (state, action) => {
        state.status.finances = "loading";
      })
      .addCase(getFinances.fulfilled, (state, action) => {
        state.status.finances = "succeeded";
        state.finances = action.payload;
      })
      .addCase(getFinances.rejected, (state, action) => {
        state.status.finances = "failed";
      })
      .addCase(addFinance.pending, (state, action) => {
        state.status.addFinance = "loading";
      })
      .addCase(addFinance.fulfilled, (state, action) => {
        state.status.addFinance = "succeeded";
        state.finances.push(action.payload);
      })
      .addCase(addFinance.rejected, (state, action) => {
        state.status.addFinance = "failed";
      })
      .addCase(updateFinance.pending, (state, action) => {
        state.status.updateFinance = "loading";
      })
      .addCase(updateFinance.fulfilled, (state, action) => {
        state.status.updateFinance = "succeeded";
        var index = state.finances.findIndex(
          (finance) => finance.id === action.payload.id
        );
        if (index !== -1) {
          state.finances[index] = action.payload;
        }
      })
      .addCase(updateFinance.rejected, (state, action) => {
        state.status.updateFinance = "failed";
      })
      .addCase(deleteFinance.pending, (state, action) => {
        state.status.deleteFinance = "loading";
      })
      .addCase(deleteFinance.fulfilled, (state, action) => {
        state.status.deleteFinance = "succeeded";
        state.finances = state.finances.filter(
          (finance) => finance.id != action.payload.id
        );
      })
      .addCase(deleteFinance.rejected, (state, action) => {
        state.status.deleteFinance = "failed";
      });
  },
});

export const getFinances = createAsyncThunk("budgets/getFinances", async () => {
  const response = await axios({
    url: "/attain/finances",
    method: "GET",
  });
  return response.data.data;
});

export const addFinance = createAsyncThunk(
  "budgets/addFinance",
  async (params) => {
    const { source, amount, duration, fixed } = params;
    const response = await axios({
      url: "/insert/finance",
      method: "POST",
      data: {
        source,
        amount,
        duration,
        fixed,
      },
    });
    return response.data.data;
  }
);

export const updateFinance = createAsyncThunk(
  "budgets/updateFinance",
  async (params) => {
    const { source, amount, duration, fixed, id } = params;
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
    return response.data.data;
  }
);

export const deleteFinance = createAsyncThunk(
  "budgets/deleteFinance",
  async (id) => {
    const response = await axios({
      url: "/update/finance",
      method: "DELETE",
      data: id,
    });
    return response.data.data;
  }
);

export const selectFinances = (state) => state.finances.finances;
// Action creators are generated for each case reducer function
export const {} = financesSlice.actions;

export default financesSlice.reducer;
