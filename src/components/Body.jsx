import { useEffect, useState } from "react";
import Question from "./Question";
import WelcomePage from "./WelcomePage";

const Body = () => {
  const [welcome, setWelcome] = useState(true);

  const toggleWelcome = () => {
    setWelcome(false);
  };

  useEffect(() => {
    const welcomeStatus = window.localStorage.getItem("isWelcome");
    if (welcomeStatus !== null) {
      setWelcome(JSON.parse(welcomeStatus));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isWelcome", JSON.stringify(welcome));
  }, [welcome]);

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
