
import Board from "./components/Board";

function App() {

  return (
    <main className="p-5">
      <h1 className="text-center text-5xl">Welcome to React</h1>

      <div className="w-full md:w-[700px] border-3 border-primary p-5 rounded-md mx-auto mt-10">
        <Board />
      </div>
    </main>
  );
}

export default App;
