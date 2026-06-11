import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(student);

    setStudent({
      name: "",
      roll: "",
      course: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="roll"
        placeholder="Roll No"
        value={student.roll}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;