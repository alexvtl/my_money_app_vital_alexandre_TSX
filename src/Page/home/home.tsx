import React, { useContext, useState } from "react";
import SetInitialBudget from "../../Components/InitialAmount/InitialAmount";
import AddExpense from "../../Components/addexpense/addexpense";
import AddIncome from "../../Components/addincomes/addicomes";
import ExpenseList from "../../Components/expenseList/expenselist";
import IncomeList from "../../Components/incomelist/incomelist";
import { ExpenseContext } from "../../Context/context";
import "./home.scss";

const Home: React.FC = () => {
  const { state } = useContext(ExpenseContext);
  const [displayExpense, setdisplayExpense] = useState(true);
  const [displayIncome, setdisplayIncome] = useState(true);
  const totalExpenses = state.expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  const totalIncomes = state.incomes.reduce(
    (acc, income) => acc + income.amount,
    0
  );
  // Calculer le resultat du budget
  const finalBudget = state.initialBudget - totalExpenses + totalIncomes;
  return (
    <main className="home">
      <section
        className="home__finalbudget"
        style={{
          backgroundColor:
            finalBudget > 0
              ? "rgba(78, 153, 83, 0.87)"
              : "rgba(234, 94, 94, 0.855)",
        }}>
        <h2 className="home__finalbudget__title">Solde</h2>
        <div className="home__finalbudget__solde">
          {finalBudget.toFixed(2)}€
        </div>
      </section>
      <SetInitialBudget />
      <section className="home__table">
        <div className="home__table__incomes">
          <div
            onClick={() =>
              displayIncome ? setdisplayIncome(false) : setdisplayIncome(true)
            }
            className="home__table__incomes__title">
            Total des Revenus: {totalIncomes.toFixed(2)}€
            <i
              className={
                displayIncome
                  ? "fa-solid fa-chevron-down"
                  : "fa-solid fa-chevron-up"
              }></i>
          </div>
          {displayIncome ? (
            <div className="home__table__incomes__container">
              <AddIncome />
              <IncomeList />
            </div>
          ) : null}
        </div>
        <div className="home__table__expenses">
          <div
            onClick={() =>
              displayExpense
                ? setdisplayExpense(false)
                : setdisplayExpense(true)
            }
            className="home__table__expenses__title">
            Total des Dépenses: {totalExpenses.toFixed(2)}€
            <i
              className={
                displayExpense
                  ? "fa-solid fa-chevron-down"
                  : "fa-solid fa-chevron-up"
              }></i>
          </div>
          {displayExpense ? (
            <div className="home__table__expenses__container">
              <AddExpense />
              <ExpenseList />
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Home;
