import React, { useState } from "react";

function AuthPage() {
  const [view, setView] = useState(null); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = () => {
    const user = { email, password };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful ");

    setEmail("");
    setPassword("");
    setView(null);
  };


  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please signup first.");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem("token", "login-success-token");
      alert("Login Successful ");
    } else {
      alert("Invalid Credentials ");
    }

    setEmail("");
    setPassword("");
    setView(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Authentication Page</h2>


      {view === null && (
        <div>
          <button onClick={() => setView("login")}>Login</button>
          <button onClick={() => setView("signup")}>Signup</button>
        </div>
      )}
      {view === "login" && (
        <div>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button onClick={handleLogin}>Submit</button>
          <button onClick={() => setView(null)}>Back</button>
        </div>
      )}

      {/* 🔹 SIGNUP FORM */}
      {view === "signup" && (
        <div>
          <h3>Signup</h3>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button onClick={handleSignup}>Submit</button>
          <button onClick={() => setView(null)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default AuthPage;