import "./App.css";
import Done from "./Component/Done";
import InProgress from "./Component/InProgress";
import ToDo from "./Component/ToDo";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <main className="drag-container w-full">
        <header>
          <h1 className="font-semibold text-2xl text-center ">Manage Task</h1>
        </header>
        <div className="drag-zones">
          <ToDo></ToDo>
          <InProgress></InProgress>
          <Done></Done>
        </div>
      </main>
    </div>
  );
}

export default App;
