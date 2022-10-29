import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./helpers/Button";
import Navbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../reducers/usersReducer";
import { setSuccessMessage } from "../reducers/sucessReducer";
import loginService from "../services/login";
import Success from "./Success";
import Error from "./Error";
import { setLogged } from "../reducers/loggedReducer";
import { seterrorMessage } from "../reducers/errorReducer";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [cardStyle, setCardStyle] = useState({
    transform: "rotateY(0deg)",
    transformStyle: "preserve-3d",
    transition: "transform 1s",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAnonappUser");
    if (loggedUserJSON) {
      const log = JSON.parse(loggedUserJSON);
      dispatch(setLogged(log));
      // blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      dispatch(setLogged(user));
      window.localStorage.setItem("loggedAnonappUser", JSON.stringify(user));
      setUsername("");
      setPassword("");
      console.log("login successful");

      console.log(
        window.localStorage.getItem("loggedAnonappUser", JSON.stringify(user))
      );
      dispatch(setSuccessMessage(`Login successful🎉 `, 10));
      nav("/messages");
    } catch (exception) {
      console.log("error");
      console.log(exception);
      dispatch(seterrorMessage(`Wrong username or password`, 10));
    }
  };

  const addUser = (event) => {
    event.preventDefault();
    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(createUser(newUser));
    dispatch(
      setSuccessMessage(
        `Registration successful🎉, please login to continue`,
        10
      )
    );
    setCardStyle({
      transform: "rotateY(0deg)",
      transformStyle: "preserve-3d",
      transition: "transform 1s",
    });
    event.target.username.value = "";
    event.target.email.value = "";
    event.target.password.value = "";
    setCardStyle({
      transform: "rotateY(0deg)",
      transformStyle: "preserve-3d",
      transition: "transform 1s",
    });
  };
  return (
    <div>
      <Navbar />
      <Success />
      <Error />
      <div className="flex flex-col items-center justify-center mt-[7vh] text-white ">
        <div
          className=" card w-[80vw] h-[70vh] bg-purple-100 drop-shadow shadow-md shadow-purple-200 rounded"
          style={{ perspective: "1000px" }}
        >
          <div
            id="card"
            className=" inner-box w-[100%] h-[100%] relative text-white"
            style={cardStyle}
          >
            <div
              className="card-front absolute w-full  h-full bg-purple-800 p-10 text-center flex justify-center"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <form className="" onSubmit={handleLogin}>
                <h2 className="font-silkscreen text-white text-2xl font-bold">
                  SIGN IN
                </h2>
                <input
                  type="text"
                  name=""
                  className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-12 block"
                  placeholder="Username"
                  onChange={({ target }) => setUsername(target.value)}
                />
                <input
                  type="password"
                  name=""
                  className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-12 mb-12 block"
                  placeholder="Password"
                  onChange={({ target }) => setPassword(target.value)}
                />
                <div className="flex justify-center  my-3 mt-6 ">
                  {" "}
                  <Button text="login" />
                </div>
                <Link
                  className="block text-purple-100 mt-10 "
                  onClick={() =>
                    setCardStyle({
                      transform: "rotateY(-180deg)",
                      transformStyle: "preserve-3d",
                      transition: "transform 1s",
                    })
                  }
                >
                  Don't have an account?
                </Link>
                <Link className="block text-purple-100 mt-3">
                  Forgot password?
                </Link>
              </form>
            </div>
            <div
              className="card-back absolute w-full  h-full bg-purple-800 p-10 text-center flex justify-center "
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              {" "}
              <form className="" onSubmit={addUser}>
                <h2 className="font-silkscreen text-white text-2xl font-bold">
                  REGISTER
                </h2>
                <input
                  type="text"
                  name="username"
                  className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-12 block"
                  placeholder="Username"
                  id="username"
                />
                <input
                  type="text"
                  name="email"
                  className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-10 block"
                  placeholder="email"
                />
                <input
                  type="password"
                  name="password"
                  className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-10 mb-10"
                  placeholder="Password"
                />
                <div className="flex justify-center  my-3 mt-6 ">
                  {" "}
                  <Button text="register" />
                </div>
                <Link
                  className="block text-purple-100 mt-6 "
                  onClick={() =>
                    setCardStyle({
                      transform: "rotateY(0deg)",
                      transformStyle: "preserve-3d",
                      transition: "transform 1s",
                    })
                  }
                >
                  Have an account?
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
