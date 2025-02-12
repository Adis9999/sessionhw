import { useState, useReducer } from "react";

const steps = [
  { id: 1, title: "Шаг 1", fields: ["name"] },
  { id: 2, title: "Шаг 2", fields: ["address"] },
  { id: 3, title: "Шаг 3", fields: [] },
];

const initialState = { name: "", email: "", address: "" };

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export default function InputTask() {
  const [step, setStep] = useState(0);
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      <h2>{steps[step].title}</h2>

      {steps[step].fields.map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formState[field]}
          onChange={(e) =>
            dispatch({ type: "UPDATE_FIELD", field, value: e.target.value })
          }
        />
      ))}

      <div>
        {step > 0 && <button onClick={prevStep}>Назад</button>}
        {step < steps.length - 1 && <button onClick={nextStep}>Далее</button>}
      </div>
    </div>
  );
}
