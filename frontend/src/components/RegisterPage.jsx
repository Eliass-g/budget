import { React, useState } from "react";

function RegisterPage({ registerUser }) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(inputs.firstname, inputs.lastname, inputs.email, inputs.password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Last Name
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Email
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Password
        <input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default RegisterPage;