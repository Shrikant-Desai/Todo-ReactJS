import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage";

function App() {
  return (
    <div className="App">
      <TodoWrapperLocalStorage />
      {/* <TodoWrapper  />/ */}
    </div>
  );
}

export default App;
