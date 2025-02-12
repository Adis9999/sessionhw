import { useReducer } from "react";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default function DarkWhite() {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  return (
    <div
      className={` ${
        theme === "light" ? "lightText" : "darkText"
      }`}
    >
      <h1>
        {theme === "light" ? "Светлая тема" : "Темная тема"}
      </h1>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className={` ${
          theme === "light"
            ? "light"
            : "dark"
        }`}
      >
        Переключить тему
      </button>
    </div>
  );
}
