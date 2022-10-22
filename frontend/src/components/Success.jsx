import { useSelector } from "react-redux";

const Success = () => {
  const message = useSelector((state) => state.success);
  if (message === "") {
    return null;
  }
  console.log(message);
  return (
    <div className="text-white bg-purple-100 rounded p-4 my-4">{message}</div>
  );
};

export default Success;
