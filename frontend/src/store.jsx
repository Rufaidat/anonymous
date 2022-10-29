import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";
import errorMessageReducer from "./reducers/errorReducer";
import usersReducer from "./reducers/usersReducer";

import successMessageReducer from "./reducers/sucessReducer";
import loggedReducer from "./reducers/loggedReducer";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    error: errorMessageReducer,
    users: usersReducer,
    success: successMessageReducer,
    logged: loggedReducer,
  },
});

export default store;
