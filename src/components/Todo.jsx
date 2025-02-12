import React, { useReducer, useState } from "react";

const initialState = [];

const todoReducer = (state, action) => {
  if (action.type === "add") {
    const newData = {
      id: crypto.randomUUID(),
      name: action.payload,
      quantity: 1,
    };
    return [...state, newData];
  }

  if (action.type === "delete") {
    return state.filter((item) => item.id !== action.payload);
  }

  if (action.type === "plus") {
    return state.map((item) =>
      item.id === action.payload
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return state;
};

const Todo = () => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);
  const [value, setValue] = useState("");

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value.trim()) {
      todoDispatch({ type: "add", payload: value });
      setValue(""); 
    }
  };

  const plusFunc = (id) => {
    todoDispatch({ type: "plus", payload: id });
  };

  const deleteFunc = (id) => {
    todoDispatch({ type: "delete", payload: id });
  };

  return (
    <div>
      <input onChange={inputChange} value={value} type="text" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoState.map((item) => (
          <li key={item.id}>
            <p>
              {item.name} - {item.quantity}
            </p>
            <button onClick={() => plusFunc(item.id)}>+</button>
            <button onClick={() => deleteFunc(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
