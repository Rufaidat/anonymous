import EaseIcon from "../images/Ease";
import LockIcon from "../images/Lock";
import ShieldIcon from "../images/ShieldIcon";
import SupportIcon from "../images/Support";
const data = [
  {
    title: "Anonymity",
    text: "Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity.",
    icon: <ShieldIcon />,
  },
  {
    title: "Safe and Secure",
    text: "Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see.",
    icon: <LockIcon />,
  },
  {
    title: "24/7 Support",
    text: "If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week.",
    icon: <SupportIcon />,
  },
  {
    title: "Easy 2 Use",
    text: "We are constantly working on Kubool as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started.",
    icon: <EaseIcon />,
  },
];

const Features = () => {
  const Cards = (props) => {
    return (
      <div className="relative rounded text-white w-full bg-gradient-to-r block from-purple-200  to-purple-100 p-6 my-4 drop-shadow shadow shadow-white ">
        {props.icon}
        <h1 className="font-bold text-2xl tracking-wide my-4">{props.title}</h1>
        <p className="pb-4">{props.text}</p>
      </div>
    );
  };
  return (
    <div id="features">
      <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {data.map((elem, index) => (
          <Cards
            key={index}
            icon={elem.icon}
            text={elem.text}
            title={elem.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
