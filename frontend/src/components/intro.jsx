import { Link } from "react-router-dom";
import Button from "./helpers/Button";
const Intro = () => {
  return (
    <div className="text-left mt-40 h-[70vh]">
      <h1 className="text-bold text-2xl mt-8 mb-6 font-bold tracking-wider text-white  ">
        Send and receive secret messages with
      </h1>
      <span className="text-purple-100 border-md rounded font-silkscreen text-5xl font-bold mt-12 shadow drop-shadow-xl shadow-purple-100">
        SHIELD
      </span>
      <p className="text-white mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sequi
        magnam, debitis dolorum earum quasi odio, impedit assumenda sunt
        deserunt magni cum, nulla totam ut nihil odit voluptate deleniti
        incidunt?
      </p>
      <Link to="/login">
        {" "}
        <div className="my-3 mt-6">
          <Button text="get started" />
        </div>
      </Link>
    </div>
  );
};
export default Intro;
