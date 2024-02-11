import { useState } from "react";
import Question from "./Question";

const Body = () => {
  const [solved, setSolved] = useState(0);

  return (
    <div className="flex flex-col items-center  gap-8 mt-7 font-poppins">
      <Question />
    </div>
  );
};

export default Body;
