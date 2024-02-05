import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "./categoriesSlice";
import {useNavigate} from 'react-router-dom';

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCategory({
        category: inputs.category_name,
      })
    ).then(navigate('/categories'));
  };

  return (
    <div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Category
          <input
            type="text"
            name="category_name"
            value={inputs.category_name || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <br></br>
    </div>
  );
};

export default AddCategory;
