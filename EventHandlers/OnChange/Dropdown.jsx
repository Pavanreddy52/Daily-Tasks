import { useState } from "react";

function Dropdown() {
  const [role, setRole] = useState("");

  return (
    <div>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <p>Selected Role: {role}</p>
    </div>
  );
}
export default Dropdown;