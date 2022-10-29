import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MsgView = () => {
  const messages = useSelector((state) => state.message);
  console.log(messages);
  const id = useParams().id;
  const message = messages.find((n) => n.id === id);
  console.log(message.message);
  return (
    <div className=" mt-10 mx-auto w-[80vw] min-H-10 bg-purple-800 p-10 drop-shadow shadow-md shadow-purple-200 rounded text-white">
      {message.message}
    </div>
  );
};
export default MsgView;
