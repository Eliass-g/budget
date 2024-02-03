import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBudgetOfCategory,
  updateBudget,
  deleteBudget,
} from "./budgetsSlice";
import EditBudget from "./EditBudget";

const BudgetListItem = ({
  id,
  category_id,
  name,
  category_name,
  allocated_amount,
  total_amount,
  duration,
}) => {
  const dispatch = useDispatch();

  const initialState = {
    id,
    name,
    category_id,
    category_name,
    allocated_amount,
    total_amount,
    duration,
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
      updateBudget({
        id: id,
        name: inputs.name,
        category_id: inputs.category_id,
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

  return (
    <>
      <div className="card">
        <div className="card-content">
          <p>
            <span>Budget:</span>
            {edit ? (
              <span className="budget-name">{name}</span>
            ) : (
              <input
                type="text"
                name="name"
                defaultValue={name}
                value={inputs.name}
                onChange={handleChange}
              />
            )}
          </p>
          <p>
            <span>Category:</span>
            {edit ? (
              <span className="category-name">{category_name}</span>
            ) : (
              <input
                type="number"
                name="category_id"
                defaultValue={category_id}
                value={inputs.category_id}
                onChange={handleChange}
              />
            )}
          </p>
          <p>
            <span>Allocated Amount:</span>
            {edit ? (
              <span className="allocated-amount">{allocated_amount}</span>
            ) : (
              <input
                type="number"
                name="allocated_amount"
                defaultValue={allocated_amount}
                value={inputs.allocated_amount}
                onChange={handleChange}
              />
            )}
          </p>
          <p>
            <span>Total Amount:</span>
            {edit ? (
              <span className="total-amount">{total_amount}</span>
            ) : (
              <input
                type="number"
                name="total_amount"
                defaultValue={total_amount}
                value={inputs.total_amount}
                onChange={handleChange}
              />
            )}
          </p>
          <p>
            <span>Duration:</span>
            {edit ? (
              <span className="duration">{duration}</span>
            ) : (
              <input
                type="number"
                name="duration"
                defaultValue={duration}
                value={inputs.duration}
                onChange={handleChange}
              />
            )}
          </p>
          <div align="center">
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

export default BudgetListItem;
