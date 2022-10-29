import Navbar from "./navbar";
import Features from "./Features";
import Intro from "./intro";
import UserMsg from "./UserMsg";
import { useSelector } from "react-redux";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Features />
    </div>
  );
};
export default Home;
