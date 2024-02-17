import React, { useContext } from "react";
import { ExpenseContext } from "../../Context/context";

import "./expenseList.scss";

const ExpenseList: React.FC = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  const handleRemoveExpense = (id: number) => {
    dispatch({
      type: "REMOVE_EXPENSE",
      payload: id,
    });
  };
  return (
    <div>
      {state.expenses.length > 0 ? (
        <ul>
          {state.expenses.map((expense) => (
            <li className="list_expenses" key={expense.id}>
              {expense.title} : {expense.amount.toFixed(2)}€
              <i
                onClick={() => handleRemoveExpense(expense.id)}
                className="fa-solid fa-xmark"></i>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune dépense enregistrée.</p>
      )}
    </div>
  );
};

export default ExpenseList;
