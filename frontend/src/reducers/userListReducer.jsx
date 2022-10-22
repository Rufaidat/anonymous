import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/User";

const initialState = [];

const usersSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    appendUsers(state, action) {
      state.push(action.payload);
    },
  },
});

export const { appendUsers, setUsers } = usersSlice.actions;

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll();
    dispatch(setUsers(users));
  };
};

export const createUser = (content) => {
  return async (dispatch) => {
    const newUser = await userService.create(content);
    dispatch(appendUsers(newUser));
    console.log(newUser);
  };
};
export default usersSlice.reducer;
