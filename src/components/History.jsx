const History = ({ gameHistory,backToHistory }) => {
  return (
    <ul className="flex flex-col gap-2 ">
      {gameHistory.map((item, index) => (
        <li key={index} >
          <button
          onClick={()=>backToHistory(index)}
            className="border border-primary rounded-sm px-2 py-1 cursor-pointer"
          >
            {index === 0
              ? "Go to start game"
              : `Go to the move number #${index}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default History;
