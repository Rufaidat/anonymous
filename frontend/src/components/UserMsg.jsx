import Button from "./helpers/Button";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CopySvg from "../images/Copy";
import Navbar from "./navbar";

const Content = (props) => {
  const content = props.userMatch;
  console.log(content);
  if (!content.messages.length === 0) {
    return (
      <div>
        <Navbar />
        <div className=" mt-10 mx-auto w-[80vw] h-[70vh] bg-purple-800 p-10 drop-shadow shadow-md shadow-purple-200 rounded text-white">
          <h1 className="text-xl text-center font-silkscreen m-6 mb-0">
            {props.username.username}'s profile
          </h1>
          <span className=" flex space-x-6  rounded">
            <em className="m-4 underline text-purple-100">{props.link}</em>
            <CopySvg
              onClick={() => {
                navigator.clipboard.writeText(props.link);
              }}
            />
          </span>
          <em>share your link 👆🏻 with friends to receive messages 😀</em>
          Oops! 😅 No one has sent you a message in last 3 Days! Share your
          profile link and check back later again!
        </div>
      </div>
    );
  }
  return (
    <div className="text-white ">
      <Navbar />
      <h1 className="text-xl text-center font-silkscreen m-6 mb-0">
        {props.username.username}'s profile
      </h1>
      <span className=" flex space-x-6 rounded">
        <em className="m-4 underline text-purple-100">{props.link}</em>
        <CopySvg
          onClick={() => {
            navigator.clipboard.writeText(props.link);
          }}
        />
      </span>
      <em>share your link 👆🏻 with friends to receive messages 😀</em>
      <div>
        {content.messages.map((elem) => (
          <div
            key={elem.id}
            className="relative rounded text-white w-full bg-purple-800 p-6 my-4 drop-shadow shadow shadow-white "
          >
            <p className="break-all mb-3">{elem.message.slice(0, 60)} ...</p>
            <Link to={`/messages/${elem.id}`}>
              <Button text="view" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const UserMsg = () => {
  const nav = useNavigate();
  const users = useSelector((state) => state.users);
  const username = useSelector((state) => state.logged);

  const userMatch = users.find((n) => n.username === username.username);
  console.log(userMatch);
  const link = `http://127.0.0.1:5173/message/${username.username}`;
  if (!userMatch.messages) {
    return (
      <div>
        <Navbar />
        <div className=" mt-10 mx-auto w-[80vw] h-[70vh] bg-purple-800 p-10 drop-shadow shadow-md shadow-purple-200 rounded text-white">
          <h1 className="text-xl text-center font-silkscreen m-6 mb-0">
            {username.username}'s profile
          </h1>
          <span className=" flex space-x-6  rounded">
            <em className="m-4 underline text-purple-100">{link}</em>
            <CopySvg
              onClick={() => {
                navigator.clipboard.writeText(link);
              }}
            />
          </span>
          <em>share your link 👆🏻 with friends to receive messages 😀</em>
          Oops! 😅 No one has sent you a message in last 3 Days! Share your
          profile link and check back later again!
        </div>
      </div>
    );
  }
  return (
    <div className="text-white ">
      <Navbar />
      <h1 className="text-xl text-center font-silkscreen m-6 mb-0">
        {username.username}'s profile
      </h1>
      <span className=" flex space-x-6 rounded">
        <em className="m-4 underline text-purple-100">{link}</em>
        <CopySvg
          onClick={() => {
            navigator.clipboard.writeText(link);
          }}
        />
      </span>
      <em>share your link 👆🏻 with friends to receive messages 😀</em>
      <div>
        {userMatch.messages.map((elem) => (
          <div
            key={elem.id}
            className="relative rounded text-white w-full bg-purple-800 p-6 my-4 drop-shadow shadow shadow-white "
          >
            <p className="break-all mb-3">{elem.message.slice(0, 60)} ...</p>
            <Link to={`/messages/${elem.id}`}>
              <Button text="view" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMsg;
