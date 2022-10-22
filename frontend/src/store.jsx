import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";
import errorMessageReducer from "./reducers/errorReducer";
import userListReducer from "./reducers/userListReducer";

import successMessageReducer from "./reducers/sucessReducer";
import loggedReducer from "./reducers/loggedReducer";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    error: errorMessageReducer,
    users: userListReducer,
    success: successMessageReducer,
    logged: loggedReducer,
  },
});

export default store;
