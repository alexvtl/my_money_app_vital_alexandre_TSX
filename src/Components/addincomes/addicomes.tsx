import React, { useState, useContext } from "react";
import { ExpenseContext } from "../../Context/context";

const AddIncome: React.FC = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vérifie si le titre et le montant sont remplis
    if (!title || !amount) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    typeof parseFloat(amount) === "number" && !isNaN(parseFloat(amount))
      ? // Réinitialise les champs du formulaire après l'envoi
        dispatch({
          type: "ADD_INCOME",
          payload: { id: Date.now(), title, amount: parseFloat(amount) },
        })
      : null;
    setTitle("");
    setAmount("");
  };

  return (
    <form className="form__add" onSubmit={handleSubmit}>
      <h2 className="form__add__title">Ajouter un Revenu</h2>
      <div className="form__add__box_input">
        <label htmlFor="titre_income">Titre</label>
        <input
          type="text"
          name="titre_income"
          id="titre_income"
          value={title}
          placeholder="Titre"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form__add__box_input">
        <label htmlFor="amount_income">Montant</label>
        <input
          type="text"
          value={amount}
          id="amount_income"
          name="amount_income"
          placeholder="Montant"
          onChange={(e) => setAmount(e.target.value)}
          min="0.00"
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddIncome;
