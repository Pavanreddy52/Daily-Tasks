import { useState, useEffect } from "react";
import Login from "./Login2";
import Profile from "./Manager";
import RoleSelection from "./RoleSelection";

function Company() {
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on page refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    console.log("Token:", token);
    console.log("Saved Role:", savedRole);

    if (token && savedRole) {
      setIsLoggedIn(true);
      setRole(savedRole);
    }
  }, []);

  const handleLogin = () => {
    console.log("Login clicked");
    console.log("Current Role:", role);

    if (!role) {
      alert("Please select a role first");
      return;
    }

    localStorage.setItem("token", "my-secret-token");
    localStorage.setItem("role", role);

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    setRole("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Welcome to Company Portal</h1>

      {!isLoggedIn ? (
        role === "" ? (
          <RoleSelection setRole={setRole} />
        ) : (
          <Login role={role} handleLogin={handleLogin} />
        )
      ) : (
        <Profile role={role} handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default Company;
