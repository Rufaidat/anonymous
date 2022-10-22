import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.error);
  console.log(error);
  // if (!error) {
  //   return null;
  // }

  return <div>{error}</div>;
};

export default Error;
