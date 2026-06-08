import { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

const AddEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !role) return;

    addEmployee({
      id: Date.now(),
      name,
      role,
    });

    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployee;