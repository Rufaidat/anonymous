import Navbar from "./navbar";
import Features from "./Features";
import Intro from "./intro";
import UserMsg from "./UserMsg";
const Home = () => {
  const userMatch = window.localStorage.getItem("loggedAnonappUser");
  console.log(userMatch);
  if (userMatch === null) {
    return (
      <div>
        <Navbar />
        <Intro />
        <Features />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <UserMsg />
    </div>
  );
};
export default Home;
