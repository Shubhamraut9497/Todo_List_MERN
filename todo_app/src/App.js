import "./App.css";
import Headers from "./components/Headers";
import TodoForm from "./components/TodoForm";
import TodosItem from "./components/TodosItem";

function App() {
  return (
    <div className="app">
      <Headers />
      <TodoForm />
      <TodosItem />
    </div>
  );
}

export default App;
