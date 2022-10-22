import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/message";

const initialState = [];

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    appendMessages(state, action) {
      state.push(action.payload);
    },
    // setBlogs(state, action) {
    //   return action.payload;
    // },
    // setLike(state, action) {
    //   const blogUpdate = action.payload;
    //   return state.map((elem) =>
    //     elem.id !== blogUpdate.id ? elem : blogUpdate
    //   );
    // },
  },
});

export const { appendMessages } = messageSlice.actions;

export const initializeMessages = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = (content) => {
  return async (dispatch) => {
    const newMessage = await blogService.create(content);
    dispatch(appendBlogs(newMessage));
    console.log(newMessage);
  };
};

// export const like = (blog) => {
//   const changedBlog = { ...blog, votes: blog.votes + 1 };
//   return async (dispatch) => {
//     const newMessage = await blogService.update(blog.id, changedBlog);
//     dispatch(setLike(newMessage));
//   };
// };

// export const comment = (blog) => {
//   const changedBlog = { ...blog, votes: blog.votes + 1 };
//   return async (dispatch) => {
//     const newMessage = await blogService.update(blog.id, changedBlog);
//     dispatch(setLike(newMessage));
//   };
// };

// export const remove = (blog) => {
//   return async (dispatch) => {
//     await blogService.remove(blog.id);
//     const blogs = await blogService.getAll();
//     dispatch(setBlogs(blogs));
//   };
// };

export default messageSlice.reducer;
