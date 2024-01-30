import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  currentUser: {},
  status: {
    login: "idle",
    register: "idle",
  },
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status.login = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status.login = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status.login = "failed";
      })
      .addCase(registerUser.pending, (state, action) => {
        state.status.register = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status.register = "succeeded";
        state.status.login = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status.register = "failed";
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.status.logout = "loading";
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status.logout = "succeeded";
        state.currentUser = {};
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status.logout = "failed";
      });
  },
});

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (userParam) => {
    const { email, password } = userParam;
    const response = await axios({
      url: "/users/login",
      method: "POST",
      data: {
        email,
        password,
      },
    });
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userParam) => {
    const { first_name, last_name, email, password } = userParam;
    const response = await axios({
      url: "/users/register",
      method: "POST",
      data: {
        first_name,
        last_name,
        email,
        password,
      },
    });
    return response.data;
  }
);

export const logoutUser = createAsyncThunk("users/logoutUser", async () => {
  const response = await axios({
    url: "/users/logout",
    method: "POST",
  });
  return response.data;
});

export const getCurrentUser = (state) => state.users.currentUser;
// Action creators are generated for each case reducer function
export const {} = usersSlice.actions;

export default usersSlice.reducer;
