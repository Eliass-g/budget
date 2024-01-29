import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  currentUser: {},
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, () => {
        console.log("loginUser pending");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("login success");
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, () => {
        console.log("loginUser failed");
    })
  },
});

export const loginUser = createAsyncThunk("users/loginUser", async (userParam) => {
  const {email, password} = userParam;
  const result = await axios({
    url: "/users/login",
    method: "POST",
    data: {
      email,
      password
    },
  });
  return result.data;
});

export const getCurrentUser = (state) => state.users.currentUser;
// Action creators are generated for each case reducer function
export const {} = usersSlice.actions;

export default usersSlice.reducer;
