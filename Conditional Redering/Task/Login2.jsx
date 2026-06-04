import { useState } from "react";

function Login2({ setRole }) {
  const [selectedRole, setSelectedRole] = useState("");

  const handleLogin = () => {
    if (selectedRole === "") {
      alert("Please select a role");
    } else {
      setRole(selectedRole);
    }
  };

  return (
    <div>
      <h2>Company Portal Login</h2>

      <select onChange={(e) => setSelectedRole(e.target.value)}>
        <option value="">-- Select Role --</option>
        <option value="employee">Employee</option>
        <option value="manager">Manager</option>
        <option value="hr">HR</option>
        <option value="founder">Founder</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login2;