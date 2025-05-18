const Square = ({value,handleSquare}) => {

  return (
    <button
      className="w-20 h-20 border-2 flex justify-center items-center border-primary rounded-sm text-4xl text-primary uppercase cursor-pointer"
      onClick={handleSquare}
    >
      {value}
    </button>
  );
};

export default Square;
