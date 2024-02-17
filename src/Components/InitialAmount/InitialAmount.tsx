import React, { useContext, useState } from "react";
import { ExpenseContext } from "../../Context/context";
import "./initialAmount.scss";

const SetInitialBudget: React.FC = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const [budget, setBudget] = useState(state.initialBudget.toString());
  const [display, setdisplay] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_INITIAL_BUDGET", payload: Number(budget) });
  };

  return (
    <div className="initialBudget">
      <div
        onClick={() => (display ? setdisplay(false) : setdisplay(true))}
        className="initialBudget__title">
        <div>Capital Initial: {state.initialBudget}€</div>
        <i
          className={
            display ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"
          }></i>
      </div>
      {display ? (
        <div className="initialBudget__container">
          <form className="form__add initialBudget " onSubmit={handleSubmit}>
            <div className="form__add__box_input initialBudgetForm">
              <label htmlFor="initialBudget">Capital Initial</label>
              <input
                id="initialBudget"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                min="0"
              />
            </div>
            <button type="submit">Définir</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default SetInitialBudget;
