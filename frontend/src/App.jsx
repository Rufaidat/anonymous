import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Message from "./components/Message";
import { useDispatch, useSelector } from "react-redux";
// import { initializeBlogs } from "./reducers/messageReducer";
import { initializeUsers } from "./reducers/userListReducer";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);
  const messages = useSelector((state) => state);
  console.log(messages);
  return (
    <div className=" w-auto h-auto px-5 py-5 bg-purple-800 font-roboto min-h-[100vh]">
      <Router>
        <Routes>
          <Route path="/login" element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
