import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Pavan", role: "Developer" },
    { id: 2, name: "Ravi", role: "Tester" },
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const updateEmployee = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, role: "Senior Developer" }
          : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};