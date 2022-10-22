import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserMsg = () => {
  const users = useSelector((state) => state.users);
  const username = useParams().username;
  const userMatch = window.localStorage.getItem("loggedAnonappUser");
  const Msgs = () => {
    if (!userMatch.messages) {
      return (
        <div>
          Oops! 😅 No one has sent you a message in last 3 Days! Share your
          profile link and check back later again!
        </div>
      );
    }
    return (
      <div>
        {userMatch.messages.map((elem) => (
          <div key={elem.id}>{elem.title}</div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <h1>{username}'s profile</h1>
      <p>
        Share your profile link ❤️ to get responses from your friend. Go to
        "View Messages" to check out the responses. 👌
      </p>
      <Button text="  view messages" />
    </div>
  );
};

export default UserMsg;
