import React, { useContext } from "react";
import { ExpenseContext } from "../../Context/context";
import "./incomesList.scss";

const IncomeList: React.FC = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const handleRemoveIncome = (id: number) => {
    dispatch({
      type: "REMOVE_INCOME",
      payload: id,
    });
  };
  return (
    <div className="list">
      {state.incomes.length > 0 ? (
        <ul>
          {state.incomes.map((income) => (
            <li className="list__incomes" key={income.id}>
              {income.title} : {income.amount.toFixed(2)}€{" "}
              <p className="list__date">{income.date}</p>
              <i
                onClick={() => handleRemoveIncome(income.id)}
                className="fa-solid fa-xmark"></i>
            </li>
          ))}
        </ul>
      ) : (
        <p className="list__avoid">Aucun revenu enregistré.</p>
      )}
    </div>
  );
};

export default IncomeList;
