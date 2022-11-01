import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useSelector } from "react-redux";

const Settings = () => {
  const users = useSelector((state) => state.users);
  const username = useSelector((state) => state.logged);

  const userMatch = users.find((n) => n.username === username.username);

  return (
    <div className="text-white text-lg mt-6 space-y-6">
      <Navbar />
      <div className="flex justify-between ">
        {" "}
        <Link to="/settings/reset-email" className="block">
          Reset email
        </Link>{" "}
        <p className="text-gray-300 text-sm">
          {userMatch.email ? userMatch.email : "not your added"}
        </p>
      </div>
      <Link to="/reset-password" className="block">
        Reset password
      </Link>
    </div>
  );
};
export default Settings;
