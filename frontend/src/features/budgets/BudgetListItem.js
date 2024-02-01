import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBudgets, getBudgetOfCategory, addBudget, updateBudget, deleteBudget, selectBudgets } from "./usersSlice";

function Budget() {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectBudgets);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      loginUser({ email: inputs.email, password: inputs.password })
    ).then(() => {
      console.log(currentUser);
    });
  };

  return (
    <div>
      
    </div>
  );
}

export default LoginPage;