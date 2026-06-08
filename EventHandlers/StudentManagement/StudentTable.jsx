import React from "react";

function StudentTable({
  students,
  deleteStudent,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Course</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.roll}</td>
            <td>{student.course}</td>

            <td>
              <button
                onClick={() =>
                  deleteStudent(index)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;