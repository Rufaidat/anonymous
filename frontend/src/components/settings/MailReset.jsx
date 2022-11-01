import { useDispatch, useSelector } from "react-redux";
import { setSuccessMessage } from "../../reducers/sucessReducer";
import { update } from "../../reducers/usersReducer";
import userService from "../../services/User";
import Button from "../helpers/Button";
import Success from "../Success";
export const MailReset = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const username = useSelector((state) => state.logged);
  const userMatch = users.find((n) => n.username === username.username);

  const handleMailReset = async (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
    };
    userService.update(userMatch.id, user).then((returnedUser) => {
      dispatch(update(returnedUser));
      // console.log(blogUpdate.title);
      dispatch(setSuccessMessage(`reset success`, 10));
      console.log(returnedUser);
    });
  };

  return (
    <div className="text-white text-md card w-[80vw] h-auto bg-purple-800 drop-shadow shadow-md shadow-purple-200 rounded mt-40 mx-auto pb-20">
      <Success />
      <form onSubmit={handleMailReset} className="flex flex-col items-center">
        <input
          type="text"
          id="email"
          placeholder="new email"
          className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-12 block"
          required
        />
        <div className="mt-12">
          <Button text="reset email" />
        </div>
      </form>
    </div>
  );
};
export default MailReset;
