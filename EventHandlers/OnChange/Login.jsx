import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (user.email === "admin@gmail.com" && user.password === "1234") {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;