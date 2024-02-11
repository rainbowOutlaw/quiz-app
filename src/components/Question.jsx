import { useEffect, useRef, useState } from "react";
import data from "../assets/data";

const Question = () => {
  const [status, setStatus] = useState({
    index: 0,
    question: data[0],
    score: 0,
    lock: false,
    result: false,
  });

  useEffect(() => {
    const currStatus = window.localStorage.getItem("status");
    if (currStatus !== null) {
      setStatus(JSON.parse(currStatus));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("status", JSON.stringify(status));
  }, [status]);

  const optionOne = useRef(null);
  const optionTwo = useRef(null);
  const optionThree = useRef(null);
  const optionFour = useRef(null);

  const optionsArr = [optionOne, optionTwo, optionThree, optionFour];

  const checkAnswer = (e, ans) => {
    if (!status.lock) {
      if (status.question.ans === ans) {
        //TODO
        e.target.classList.add("bg-green-400");

        setStatus((prevStatus) => {
          return { ...prevStatus, score: prevStatus.score + 1 };
        });
      } else {
        //TODO
        e.target.classList.add("bg-red-400");

        optionsArr[status.question.ans - 1].current.classList.add(
          "bg-green-400"
        );
      }

      setStatus((prevState) => ({ ...prevState, lock: true }));
    }
  };

  const reset = () => {
    setStatus({
      index: 0,
      question: data[0],
      score: 0,
      lock: false,
      result: false,
    });
  };

  const handleClick = () => {
    if (status.lock) {
      if (status.index === data.length - 1) {
        setStatus((prevStatus) => ({ ...prevStatus, result: true }));
        return;
      }

      setStatus((prevStatus) => ({
        ...prevStatus,
        index: prevStatus.index + 1,
        question: data[prevStatus.index + 1],
        lock: false,
      }));
      optionsArr.map((option) => {
        option.current.classList.remove("bg-green-400");
        option.current.classList.remove("bg-red-400");
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 w-1/2">
      {status.result ? (
        <></>
      ) : (
        <>
          <h2 className="font-bold text-xl mb-3">
            {status.index + 1}. {status.question.question}
          </h2>
          <ul className="ml-2">
            <li
              ref={optionOne}
              onClick={(e) => checkAnswer(e, 1)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {status.question.option1}
            </li>
            <li
              ref={optionTwo}
              onClick={(e) => checkAnswer(e, 2)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {status.question.option2}
            </li>
            <li
              ref={optionThree}
              onClick={(e) => checkAnswer(e, 3)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {status.question.option3}
            </li>
            <li
              ref={optionFour}
              onClick={(e) => checkAnswer(e, 4)}
              className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg"
            >
              {status.question.option4}
            </li>
          </ul>
          <button
            onClick={handleClick}
            className="p-2 mx-auto bg-slate-400 w-1/4 hover:bg-green-600 rounded-lg"
          >
            Next
          </button>

          <div className="mx-auto">{status.index + 1} of 5</div>
        </>
      )}
      {status.result && (
        <div className="w-full flex flex-col items-center gap-60">
          <h2>
            You scored {status.score} out of {data.length}
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
