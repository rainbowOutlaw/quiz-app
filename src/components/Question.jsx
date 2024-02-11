import { useState } from "react";
import data from "../assets/data";

const Question = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);

  const checkAnswer = (e, ans) => {
    if (question.ans === ans) {
      //TODO
    } else {
      //TODO
    }
  };

  return (
    <div className="flex flex-col gap-4 w-1/2">
      <h2 className="font-bold text-xl mb-3">
        {index + 1}. {question.question}
      </h2>
      <ul className="ml-2">
        <li
          onClick={(e) => checkAnswer(e, 1)}
          className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg hover:bg-blue-500"
        >
          {question.option1}
        </li>
        <li
          onClick={(e) => checkAnswer(e, 2)}
          className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg hover:bg-blue-500"
        >
          {question.option2}
        </li>
        <li
          onClick={(e) => checkAnswer(e, 3)}
          className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg hover:bg-blue-500"
        >
          {question.option3}
        </li>
        <li
          onClick={(e) => checkAnswer(e, 4)}
          className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg hover:bg-blue-500"
        >
          {question.option4}
        </li>
      </ul>
      <button className="p-2 mx-auto bg-slate-400 w-1/4 hover:bg-green-600 rounded-lg">
        Next
      </button>

      <div className="mx-auto">{index + 1} of 5</div>
    </div>
  );
};

export default Question;
