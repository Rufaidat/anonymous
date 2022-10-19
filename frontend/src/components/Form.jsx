import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./helpers/Button";
const Form = () => {
  const [cardStyle, setCardStyle] = useState({
    transform: "rotateY(-180deg)",
    transformStyle: "preserve-3d",
    transition: "transform 1s",
  });
  return (
    <div className=" container flex flex-col items-center mt-[7vh] text-white ">
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
            <form className="">
              <h2 className="font-silkscreen text-white text-2xl font-bold">
                SIGN IN
              </h2>
              <input
                type="text"
                name=""
                className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-12"
                placeholder="Username"
              />
              <input
                type="password"
                name=""
                className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-12 mb-12"
                placeholder="Password"
              />
              <Button text="login" />
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
            <form className="">
              <h2 className="font-silkscreen text-white text-2xl font-bold">
                REGISTER
              </h2>
              <input
                type="text"
                name=""
                className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-12"
                placeholder="Username"
              />
              <input
                type="text"
                name=""
                className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-10"
                placeholder="email"
              />
              <input
                type="password"
                name=""
                className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-10 mb-10"
                placeholder="Password"
              />
              <Button text="register" />
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
  );
};
export default Form;
