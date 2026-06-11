import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import "./StudentApp.css";

function StudentMain() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default StudentMain;