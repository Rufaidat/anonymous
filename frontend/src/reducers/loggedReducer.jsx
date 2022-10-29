import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    logged(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export const { logged } = loggedSlice.actions;

export const setLogged = (users) => {
  return (dispatch) => {
    dispatch(logged(users));
  };
};
export const removelogged = () => {
  return (dispatch) => {
    dispatch(logged(null));
  };
};
export default loggedSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = null;

// const loggedSlice = createSlice({
//   name: "logged",
//   initialState,
//   reducers: {
//     logged(state, action) {
//       state = action.payload;
//       return state;
//     },
//   },
// });
// export const { logged } = loggedSlice.actions;

// // export const initializelogged = () => {
// //   return async (dispatch) => {
// //     const users = window.localStorage.getItem;
// //     dispatch(setUsers(users));
// //   };
// // };

// export const setLogged = (log) => {
//   return (dispatch) => {
//     dispatch(logged(log));
//   };
// };
// export const removelogged = () => {
//   return (dispatch) => {
//     dispatch(logged(null));
//   };
// };
// export default loggedSlice.reducer;
