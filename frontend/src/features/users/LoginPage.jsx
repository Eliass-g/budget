import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, getCurrentUser } from "./usersSlice";

function LoginPage() {
  const dispatch = useDispatch();

  const currentUser = useSelector(getCurrentUser);

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
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <button>Sign Up</button>
    </div>
  );
}

export default LoginPage;
