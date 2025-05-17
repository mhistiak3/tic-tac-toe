const Square = ({value,handleSquare}) => {

  return (
    <button
      className="w-10 h-10 border-2 flex justify-center items-center border-primary rounded-sm text-xl text-primary uppercase cursor-pointer"
      onClick={handleSquare}
    >
      {value}
    </button>
  );
};

export default Square;
