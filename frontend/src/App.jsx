import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Form from "./components/Form";
import Message from "./components/Message";
import { useDispatch, useSelector } from "react-redux";

import { initializeUsers } from "./reducers/usersReducer";
import { useEffect, useState } from "react";
import MsgView from "./components/MsgView";
import { initializeMessages } from "./reducers/messageReducer";
import Settings from "./components/Settings";
import UserMsg from "./components/UserMsg";
import MailReset from "./components/settings/MailReset";
// import { initializelogged } from "./reducers/loggedReducer";

function App() {
  const user = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(initializeMessages());
  }, [dispatch]);
  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem("loggedAnonappUser");
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON);
  //     setUser(user);
  //     // noteService.setToken(user.token)
  //   }
  // }, []);
  // useEffect(() => {
  //   dispatch(initializelogged());
  // }, [dispatch]);
  // const user = useSelector((state) => state.logged);
  console.log(user);
  return (
    <div className=" w-auto h-auto px-5 py-5 bg-purple-800 font-roboto min-h-[100vh]">
      <Router>
        <Routes>
          <Route path="/login" element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="/message/:username" element={<Message />} />
          <Route path="messages/:id" element={<MsgView />} />
          <Route path="/settings" element={<Settings />} />
          reset-email
          <Route path="/settings/reset-email" element={<MailReset />} />
          <Route path="/messages" element={<UserMsg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
