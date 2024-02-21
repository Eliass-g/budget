import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addBudget } from "./budgetsSlice";
import { useNavigate } from "react-router-dom";
import CategoryDropDown from "../categories/CategoryDropDown";

const AddBudget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [category_id, setCategoryId] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addBudget({
        name: inputs.name,
        category_id: category_id,
        allocated_amount: inputs.allocated_amount,
        total_amount: inputs.total_amount,
        duration: inputs.duration,
      })
    ).then(navigate("/budgets"));
  };

  return (
    <div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Category
          <CategoryDropDown setValues={setCategoryId} />
        </label>
        <label>
          Allocated Amount
          <input
            type="number"
            name="allocated_amount"
            value={inputs.allocated_amount || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Amount
          <input
            type="number"
            name="total_amount"
            value={inputs.total_amount || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            name="duration"
            value={inputs.duration || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <br></br>
    </div>
  );
};

export default AddBudget;
