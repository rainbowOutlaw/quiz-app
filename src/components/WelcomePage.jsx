const WelcomePage = ({ toggleWelcome }) => {
  return (
    <div className="flex flex-col items-center gap-24">
      <h2>Welcome to a quiz for awesome people</h2>
      <h2>My name is Saswat. I hope you like the quiz !!!</h2>
      <button
        className="p-2 mx-auto bg-slate-400 w-1/6 hover:bg-green-600 rounded-lg"
        onClick={toggleWelcome}
      >
        Start The Quiz
      </button>
    </div>
  );
};

export default WelcomePage;
