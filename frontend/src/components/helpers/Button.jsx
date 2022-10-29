const Button = (props) => {
  return (
    <button
      type="submit"
      className="bg-gradient-to-r block from-purple-300 via-purple-100 to-purple-200 px-3 py-2 rounded text-lg drop-shadow-5xl shadow-5xl   uppercase text-white tracking-widest font-semibold hover:-translate-y-0.5 transition active:opacity-25 font-silkscreen "
    >
      {props.text}
    </button>
  );
};
export default Button;
