import "./App.css";
import DarkWhite from "./components/DarkWhite";
import Form from "./components/Form";
import InputTask from "./components/InputTask";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <Form/>
      <Todo/>
      <InputTask/>
      <DarkWhite/>

    </div>
  );
};

export default App;
