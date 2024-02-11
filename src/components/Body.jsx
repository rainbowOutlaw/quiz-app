import { useState } from "react";
import Question from "./Question";
import WelcomePage from "./WelcomePage";

const Body = () => {
  const [welcome, setWelcome] = useState(true);

  const toggleWelcome = () => {
    setWelcome(false);
  };

  return (
    <>
      {welcome ? (
        <WelcomePage toggleWelcome={toggleWelcome} />
      ) : (
        <div className="flex flex-col items-center  gap-8 mt-7 font-poppins">
          <Question />
        </div>
      )}
    </>
  );
};

export default Body;
