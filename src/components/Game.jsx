const Game = ({ children, nextMove, winner }) => {
  return (
    <div className="w-full md:w-[700px] border-3 border-primary py-7 px-10 rounded-md mx-auto mt-10 ">
      {winner ? (
        <h3 className="text-2xl mb-5 text-center">Winner: {winner}</h3>
      ) : (
        <h3 className="text-2xl mb-5 text-center">Next Move: {nextMove}</h3>
      )}

      <div className="flex sm:flex-row flex-col sm:justify-between justify-center gap-5">{children}</div>
    </div>
  );
};

export default Game;
