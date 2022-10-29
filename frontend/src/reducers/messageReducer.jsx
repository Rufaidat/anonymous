import { createSlice } from "@reduxjs/toolkit";
import messageService from "../services/message";

const initialState = [];

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    appendMessages(state, action) {
      state.push(action.payload);
    },
    setMessages(state, action) {
      return action.payload;
    },
  },
});

export const { appendMessages, setMessages } = messageSlice.actions;

export const initializeMessages = () => {
  return async (dispatch) => {
    const message = await messageService.getAll();
    dispatch(setMessages(message));
  };
};

export const createMessage = (content) => {
  return async (dispatch) => {
    const newMessage = await messageService.create(content);
    dispatch(appendMessages(newMessage));
    console.log(newMessage);
  };
};

export default messageSlice.reducer;
