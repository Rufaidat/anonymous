import { Link } from "react-router-dom";
import Button from "./helpers/Button";
import Navbar from "./navbar";

const Settings = () => {
  return (
    <div className="text-white text-lg mt-6 space-y-6">
      <Navbar />
      <Link to="/settings/reset-email" className="block">
        Reset email
      </Link>
      <Link to="/reset-password" className="block">
        Reset password
      </Link>
    </div>
  );
};
export default Settings;
