import React, { createContext, useReducer } from "react";
import { Expense, Income, ExpenseAction } from "../types";

const initialState = {
  expenses: [], // Tableau pour stocker les dépenses
  incomes: [], // Tableau pour stocker les revenus
  initialBudget: 0, // Valeur initiale du budget
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
      // Ajoute une nouvelle dépense au tableau des dépenses
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
      // Ajoute un nouveau revenu au tableau des revenus
      return { ...state, incomes: [...state.incomes, action.payload] };
    case "REMOVE_INCOME":
      // Supprime un revenu du tableau en filtrant par ID
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== action.payload),
      };
    case "SET_INITIAL_BUDGET":
      // Met à jour le budget initial avec la nouvelle valeur
      return { ...state, initialBudget: action.payload };
    default:
      // Retourne l'état actuel pour toute action non gérée
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
