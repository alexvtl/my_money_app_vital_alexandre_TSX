import React, { useState, useContext } from "react";
import { ExpenseContext } from "../../Context/context";
import "./addexpense.scss";
const AddExpense: React.FC = () => {
  // accéder à dispatch du ExpenseContext
  const { dispatch } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  // Fonction submit formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vérifie si le titre et le montant sont remplis
    if (!title || !amount) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    typeof parseFloat(amount) === "number" && !isNaN(parseFloat(amount))
      ? dispatch({
          type: "ADD_EXPENSE",
          payload: { id: Date.now(), title, amount: Number(amount) },
        })
      : null;
    // Réinitialise les champs du formulaire après l'envoi
    setTitle("");
    setAmount("");
  };

  return (
    <form className="form__add" onSubmit={handleSubmit}>
      <h2 className="form__add__title">Ajouter une Dépense</h2>
      <div className="form__add__box_input">
        <label htmlFor="titre_expense">Titre</label>
        <input
          type="text"
          name="titre_expense"
          id="titre_expense"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form__add__box_input">
        <label htmlFor="amount_expense">Montant</label>
        <input
          placeholder="Montant"
          type="text"
          id="amount_expense"
          name="amount_expense"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddExpense;
