const Question = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl mb-3">
        1. Which device is required for the Internet connection ?
      </h2>
      <ul className="ml-2">
        <li className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg">
          Modem
        </li>
        <li className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg">
          Router
        </li>
        <li className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg">
          LAN cable
        </li>
        <li className="cursor-pointer border-[0.1rem] border-white mb-3 p-1 rounded-lg">
          Pen Drive
        </li>
      </ul>
      <button className="p-2 mx-auto bg-slate-400 w-1/4 hover:bg-green-600 rounded-lg">
        Next
      </button>
    </div>
  );
};

export default Question;
