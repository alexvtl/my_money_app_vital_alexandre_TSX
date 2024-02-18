import React, { createContext, useReducer } from "react";
import { Expense, Income, ExpenseAction } from "../types";

const initialState = {
  expenses: [
    { id: 1708249431948, title: "courses", amount: 200, date: "18/02/2024" },
    { id: 1708249440000, title: "loyer", amount: 500, date: "18/02/2024" },
  ], // Tableau pour stocker les dépenses
  incomes: [
    { id: 1708249431948, title: "salaire", amount: 1700, date: "18/02/2024" },
  ], // Tableau pour stocker les revenus
  initialBudget: 100, // Valeur initiale du budget
};

interface ExpenseState {
  expenses: Expense[];
  incomes: Income[];
  initialBudget: number;
}
// Création du contexte avec un état initial et une fonction dispatch vide
export const ExpenseContext = createContext<{
  state: ExpenseState;
  dispatch: React.Dispatch<ExpenseAction>;
}>({ state: initialState, dispatch: () => null });
interface MyComponentProps {
  children?: React.ReactNode;
}
// Le reducer pour gérer les actions et mettre à jour l'état de l'application
const expenseReducer = (state: ExpenseState, action: ExpenseAction) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // Ajoute une nouvelle dépense
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "REMOVE_EXPENSE":
      // Supprime une dépense du tableau en filtrant par ID
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "ADD_INCOME":
      // Ajoute un nouveau revenu
      return { ...state, incomes: [...state.incomes, action.payload] };
    case "REMOVE_INCOME":
      // Supprime un revenu du tableau avec l'id
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== action.payload),
      };
    case "SET_INITIAL_BUDGET":
      // Met à jour le budget initial
      return { ...state, initialBudget: action.payload };
    default:
      // Retourne l'état actuel si action non gérée
      return state;
  }
};
// Le composant fournisseur qui englobe les composants enfants
export const ExpenseProvider: React.FC<MyComponentProps> = ({
  children,
}: MyComponentProps) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
