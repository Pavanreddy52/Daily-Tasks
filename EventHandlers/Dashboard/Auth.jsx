import { useState } from "react";

function Auth({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.email.includes("@")) return "Invalid email";
    if (form.password.length < 6)
      return "Password must be 6+ chars";
    if (!isLogin && form.name === "")
      return "Name required";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const existingUser = users.find(
        (u) =>
          u.email === form.email &&
          u.password === form.password
      );

      if (!existingUser) {
        setError("Invalid credentials");
        return;
      }

      localStorage.setItem(
        "currentUser",
        existingUser.name
      );
      setUser(existingUser.name);
    } else {
      const userExists = users.find(
        (u) => u.email === form.email
      );

      if (userExists) {
        setError("User already exists");
        return;
      }

      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password
      };

      users.push(newUser);
      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );

      alert("Registered Successfully ✅");
      setIsLogin(true);
    }

    setError("");
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        )}

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "New user? Register"
          : "Already have account? Login"}
      </p>
    </div>
  );
}

export default Auth;