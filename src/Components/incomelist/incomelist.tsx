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
    <div>
      {state.incomes.length > 0 ? (
        <ul>
          {state.incomes.map((income) => (
            <li className="list__incomes" key={income.id}>
              {income.title} : {income.amount.toFixed(2)}€
              <i
                onClick={() => handleRemoveIncome(income.id)}
                className="fa-solid fa-xmark"></i>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun revenu enregistré.</p>
      )}
    </div>
  );
};

export default IncomeList;
