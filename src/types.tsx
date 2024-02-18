export interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
}

export interface Income {
  id: number;
  title: string;
  amount: number;
  date: string;
}

export type ExpenseAction =
  | { type: "ADD_EXPENSE"; payload: Expense }
  | { type: "REMOVE_EXPENSE"; payload: number }
  | { type: "ADD_INCOME"; payload: Income }
  | { type: "REMOVE_INCOME"; payload: number }
  | { type: "SET_INITIAL_BUDGET"; payload: number };

export interface AppState {
  expenses: Expense[];
  incomes: Income[];
  initialBudget: number;
}
