import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategory, deleteCategory } from "./categoriesSlice";

const CategoryListItem = ({ id, category_name }) => {
  const dispatch = useDispatch();

  const initialState = {
    id,
    category_name,
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
      updateCategory({
        id: id,
        category: inputs.category_name,
      })
    );
    setEdit(!edit);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteCategory(id));
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
            <span>ID:</span>
            <span className="budget-name">{id}</span>
          </p>
          <p>
            <span>Name:</span>
            {edit ? (
              <span className="category-name">{category_name}</span>
            ) : (
              <input
                type="text"
                name="category_id"
                value={inputs.category_name}
                onChange={handleChange}
              />
            )}
          </p>
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

export default CategoryListItem;
