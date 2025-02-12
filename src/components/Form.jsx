import React, { useReducer } from "react";

const Form = () => {
  const formReducer = (state, action) => {
    if (action.type === "name") {
      return {
        ...state,
        name: action.payload,
      };
    }
    if (action.type === "email") {
        return {
          ...state,
          email: action.payload,
        };
      }
    return {
      name: "",
      email: "",
    };
  };

  const [formState, formDispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  const changeName = (e) => {
    formDispatch({ type: "name", payload: e.target.value });
  };
  const changeEmail = (e) => {
    formDispatch({ type: "email", payload: e.target.value });
  };

  return (
    <div>
      <h1>Form</h1>
      <div>
        <input onChange={changeName} value={formState.name} type="text" />
        <input onChange={changeEmail} value={formState.email} type="email" />
      </div>
      <h2>Name: {formState.name}</h2>
      <h2>Email: {formState.email}</h2>
    </div>
  );
};

export default Form;
