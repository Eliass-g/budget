import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBudgetOfCategory,
  updateBudget,
  deleteBudget,
} from "./budgetsSlice";
import CategoryDropDown from "../categories/CategoryDropDown";
import ExpenseList from "../expenses/ExpenseList";
import { selectAmount } from "../expenses/expensesSlice";

const BudgetListItem = ({
  id,
  name,
  category_name,
  category_id,
  allocated_amount,
  total_amount,
  duration,
}) => {
  const dispatch = useDispatch();
  const allocated_amount_new = useSelector(selectAmount);
  const [category_id_new, setCategoryId] = useState(category_id);

  const initialState = {
    id,
    name,
    category_name,
    total_amount,
    duration,
  };

  useEffect(() => {
    
    dispatch(
      updateBudget({
        id: id,
        name: inputs.name,
        category_id: category_id_new,
        allocated_amount: allocated_amount_new,
        total_amount: inputs.total_amount,
        duration: inputs.duration,
      })
    );
  }, [allocated_amount_new]);

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
        category_id: category_id_new,
        allocated_amount: allocated_amount,
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
                <span className="allocated-amount">{allocated_amount}</span>
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
