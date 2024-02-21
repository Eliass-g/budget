import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBudgetOfCategory,
  updateBudget,
  deleteBudget,
} from "./budgetsSlice";
import CategoryDropDown from "../categories/CategoryDropDown";
import ExpenseList from "../expenses/ExpenseList";

const BudgetListItem = ({
  id,
  name,
  category_name,
  allocated_amount,
  total_amount,
  duration,
}) => {
  const dispatch = useDispatch();
  const [category_id, setCategoryId] = useState();

  const initialState = {
    id,
    name,
    category_name,
    allocated_amount,
    total_amount,
    duration,
  };

  const [inputs, setInputs] = useState(initialState);
  const [expensePage, setExpensePage] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateBudget({
        id: id,
        name: inputs.name,
        category_id: category_id,
        allocated_amount: inputs.allocated_amount,
        total_amount: inputs.total_amount,
        duration: inputs.duration,
      })
    );
    setEdit(!edit);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteBudget(id));
  };

  const [edit, setEdit] = useState(true);

  const handleClick = function () {
    setEdit(!edit);
    setInputs(initialState);
  };

  const openExpenseList = function () {
    setExpensePage(!expensePage);
  };

  return (
    <>
      {!expensePage && (
        <div className="card">
          <div className="card-content">
            <div>
              <span>Budget:</span>
              {edit ? (
                <span className="budget-name">{name}</span>
              ) : (
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                />
              )}
            </div>
            <div>
              <span>Category:</span>
              {edit ? (
                <span className="category-name">{category_name}</span>
              ) : (
                <CategoryDropDown setValues={setCategoryId} />
              )}
            </div>
            <div>
              <span>Allocated Amount:</span>
              {edit ? (
                <span className="allocated-amount">{allocated_amount}</span>
              ) : (
                <input
                  type="number"
                  name="allocated_amount"
                  value={inputs.allocated_amount}
                  onChange={handleChange}
                />
              )}
            </div>
            <div>
              <span>Total Amount:</span>
              {edit ? (
                <span className="total-amount">{total_amount}</span>
              ) : (
                <input
                  type="number"
                  name="total_amount"
                  value={inputs.total_amount}
                  onChange={handleChange}
                />
              )}
            </div>
            <div>
              <span>Duration:</span>
              {edit ? (
                <span className="duration">{duration}</span>
              ) : (
                <input
                  type="number"
                  name="duration"
                  value={inputs.duration}
                  onChange={handleChange}
                />
              )}
            </div>
            <div>
              {edit ? (
                <>
                  <button onClick={handleClick}>Edit</button>
                  <button onClick={openExpenseList}>Expenses</button>
                </>
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
      )}
      {expensePage && (
        <>
          <ExpenseList budget_id={id} />
          <button onClick={openExpenseList}>Back</button>
        </>
      )}
    </>
  );
};

export default BudgetListItem;
