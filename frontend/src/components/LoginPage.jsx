import { React, useState } from "react";

function LoginPage({ loginUser }) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(inputs.email, inputs.password);
  }

  const onClick = () => {
    
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
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
    <button onClick>Sign Up</button>
    </div>
  )
}

export default LoginPage;