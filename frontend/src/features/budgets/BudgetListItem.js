import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBudgets,
  getBudgetOfCategory,
  addBudget,
  updateBudget,
  deleteBudget,
  selectBudgets,
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
  /*  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBudget({ email: inputs.email, password: inputs.password }));
  }; */

  const [edit, setEdit] = useState(false);

  const handleClick = function () {
    setEdit(true);
  };

  return (
    <>
      <div>
        <br></br>
        <div>Budget: {name}</div>
        <div>Category: {category_name}</div>
        <div>Allocated Amount: {allocated_amount}</div>
        <div>Total Amount: {total_amount}</div>
        <div>Duration: {duration}</div>
        <button onClick={handleClick}>Edit</button>
        <br></br>
      </div>
      {edit && (<EditBudget />)}
    </>
  );
};

export default BudgetListItem;
