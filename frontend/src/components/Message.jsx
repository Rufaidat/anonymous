import Button from "./helpers/Button";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { createMessage } from "../reducers/messageReducer";
import { useDispatch } from "react-redux";
import { setSuccessMessage } from "../reducers/sucessReducer";
import Success from "./Success";
const Message = () => {
  const dispatch = useDispatch();
  const params = useParams().username;
  const sendMessage = (event) => {
    event.preventDefault();
    const newMessage = {
      message: event.target.text.value,
      username: params,
    };
    dispatch(createMessage(newMessage));
    event.target.text.value = "";
    dispatch(setSuccessMessage(`message sent🎉 `, 10));
  };
  return (
    <div className="py-10 px-5 ">
      <form
        onSubmit={sendMessage}
        className=" flex flex-col items-center text-white"
      >
        <Success />
        <h2 className="font-silkscreen text-white text-2xl font-bold mb-6">
          say something...
        </h2>
        <label htmlFor="message" className="block  ">
          Say Something About Me{" "}
          <span className="text-red-700 text-2xl">*</span>
        </label>
        <textarea
          type="text"
          rows={5}
          // name="text"
          id="text"
          className="bg-transparent outline-none border-b-2 w-60 border-purple-100 mt-8 block pb-10"
          placeholder="leave a message here..."
          required
        />

        <div className="flex justify-center">
          {" "}
          <Button text="send message" />
        </div>

        <div className="mt-10"></div>
        <p>
          Say what do you think about noraroberts or Leave a feedback for
          noraroberts anonymously using the form above.. 🥰 <br />
          Thank You!! 😍😊
        </p>

        <h4 className="text-bold text-lg mt-6">
          Guide to write perfect Anonymous Messages by Shield:
        </h4>
        <p>
          {" "}
          With the help of our anonymous message sender named Kubool now, you
          can easily message your heart's desire to your friends, family
          members, and anyone you know who are on Kubool. We care about our
          users and thus we are suggesting what you may choose to tell them
          anonymously. Everyone in this world loves to get affection from their
          loved ones be it their parents, partners, or close friends. Tell them
          how much they matter to you and how much you care for them! These
          compliments will increase their positive feelings and they will feel
          your friendly love from the core of their heart. If you feel like
          there is something you do not like out of them, you may choose to
          constructively criticize them about it. That is completely fine and in
          fact when constructive criticism is delivered right, one can develop
          themselves accordingly to become a better person as a whole. Make sure
          to be on point with the criticism and make sure that it does not
          become an insult at the end. You may also choose to suggest things
          that will help them become a better person as a whole! Future
          predictions are tough, as shown by the available future predictions
          apps just like the love predictions! No one knows what is going to
          happen next. But, it is always good to be aware of your cons, focuses
          on your pros, and transforming your cons to your pros. That is exactly
          what good constructive criticism helps you achieve! We hope you liked
          this little guide on how you can write better anonymous messages which
          are going to be very productive. Don't forget to play by the rules,
          keep it clean out there. 😉
        </p>
      </form>
    </div>
  );
};
export default Message;
