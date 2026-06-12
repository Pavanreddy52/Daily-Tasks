import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  const { employees } =
    useContext(EmployeeContext);

  return (
    <>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No Employees Found</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <EmployeeItem
              key={employee.id}
              employee={employee}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default EmployeeList;