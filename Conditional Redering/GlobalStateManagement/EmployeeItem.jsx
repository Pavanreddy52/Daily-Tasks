import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

const EmployeeItem = ({ employee }) => {
  const { updateEmployee, deleteEmployee } =
    useContext(EmployeeContext);

  return (
    <li>
      <strong>{employee.name}</strong> - {employee.role}

      <button
        onClick={() =>
          updateEmployee(employee.id)
        }
      >
        Update
      </button>

      <button
        onClick={() =>
          deleteEmployee(employee.id)
        }
      >
        Delete
      </button>
    </li>
  );
};

export default EmployeeItem;