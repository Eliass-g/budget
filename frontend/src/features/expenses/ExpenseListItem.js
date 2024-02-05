import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { updateExpense, deleteExpense } from "./expensesSlice";

const ExpenseListItem = ({ id, expense_name, amount, budget_id }) => {
  const dispatch = useDispatch();

  const initialState = {
    id,
    expense_name,
    amount,
    budget_id,
  };

  const [inputs, setInputs] = useState(initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateExpense({
        id: id,
        expense_name: inputs.expense_name,
        amount: inputs.amount,
        budget_id: inputs.budget_id,
      })
    );
    setEdit(!edit);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteExpense(id));
  };

  const [edit, setEdit] = useState(true);

  const handleClick = function () {
    setEdit(!edit);
    setInputs(initialState);
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div>
            <span>ID:</span>
            <span className="expense-id">{id}</span>
          </div>
          <div>
            <span>Name:</span>
            {edit ? (
              <span className="category-name">{expense_name}</span>
            ) : (
              <input
                type="text"
                name="expense_name"
                value={inputs.expense_name}
                onChange={handleChange}
              />
            )}
          </div>
          <div>
            <span>Amount:</span>
            {edit ? (
              <span className="category-name">{amount}</span>
            ) : (
              <input
                type="text"
                name="amount"
                value={inputs.amount}
                onChange={handleChange}
              />
            )}
          </div>
          <div>
            <span>Budget:</span>
            {edit ? (
              <span className="category-name">{budget_id}</span>
            ) : (
              <input
                type="text"
                name="budget_id"
                value={inputs.budget_id}
                onChange={handleChange}
              />
            )}
          </div>
          <div>
            {edit ? (
              <button onClick={handleClick}>Edit</button>
            ) : (
              <>
                <button onClick={handleClick}>Cancel</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleSubmit}>Save</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseListItem;
