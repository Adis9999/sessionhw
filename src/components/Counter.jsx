import { useReducer } from "react";

const Counter = () => {
  const counterReduser = (state, action) => {
    if (action.type === "plus") {
      return { count: state.count++ };
    }
    if (action.type === "minus") {
      return { count: state.count-- };
    }
    return {
      count: 0,
    };
  };

  const [counterState, counterDispatch] = useReducer(counterReduser, {
    count: 0,
  });

  const plusFunc = () => {
    counterDispatch({ type: "plus" });
  };
  const minusFunc = () => {
    counterDispatch({ type: "minus" });
  };

  return (
    <div>
      <button onClick={plusFunc}>+</button>
      <h1>{counterState.count}</h1>
      <button onClick={minusFunc}>-</button>
    </div>
  );
};

export default Counter;
