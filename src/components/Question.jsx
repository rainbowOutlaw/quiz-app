import { useRef, useState } from "react";
import data from "../assets/data";

const Question = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  const optionOne = useRef(null);
  const optionTwo = useRef(null);
  const optionThree = useRef(null);
  const optionFour = useRef(null);

  const optionsArr = [optionOne, optionTwo, optionThree, optionFour];

  const checkAnswer = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        //TODO
        e.target.classList.add("bg-green-400");

        setScore(score + 1);
      } else {
        //TODO
        e.target.classList.add("bg-red-400");

        optionsArr[question.ans - 1].current.classList.add("bg-green-400");
      }

      setLock(true);
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const handleClick = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      optionsArr.map((option) => {
        option.current.classList.remove("bg-green-400");
        option.current.classList.remove("bg-red-400");
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 w-1/2">
      {result ? (
        <></>
      ) : (
        <>
          <h2 className="font-bold text-xl mb-3">
            {index + 1}. {question.question}
          </h2>
          <ul className="ml-2">
            <li
              ref={optionOne}
              onClick={(e) => checkAnswer(e, 1)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {question.option1}
            </li>
            <li
              ref={optionTwo}
              onClick={(e) => checkAnswer(e, 2)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {question.option2}
            </li>
            <li
              ref={optionThree}
              onClick={(e) => checkAnswer(e, 3)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {question.option3}
            </li>
            <li
              ref={optionFour}
              onClick={(e) => checkAnswer(e, 4)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {question.option4}
            </li>
          </ul>
          <button
            onClick={handleClick}
            className="p-2 mx-auto bg-slate-400 w-1/4 hover:bg-green-600 rounded-lg"
          >
            Next
          </button>

          <div className="mx-auto">{index + 1} of 5</div>
        </>
      )}
      {result && (
        <div className="w-full flex flex-col items-center gap-60">
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <button
            onClick={reset}
            className="p-2 mx-auto bg-slate-400 w-1/4 hover:bg-green-600 rounded-lg"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
