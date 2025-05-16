import TodoList from "./HOC/TodoList";
import { Counter } from "./reactRedux/Counter";
import "./styles.css";
import Messenger from "./useReducer/Messenger";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Messenger />
      <Counter />
      <TodoList />
    </div>
  );
}
