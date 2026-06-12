import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "./studentSlice";

function Student() {
  const [name, setName] = useState("");

  const students = useSelector(
    (state) => state.students.students
  );

  const dispatch = useDispatch();

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() =>
          dispatch(addStudent({ name }))
        }
      >
        Add Student
      </button>

      {students.map((s, i) => (
        <h4 key={i}>{s.name}</h4>
      ))}
    </>
  );
}

export default Student;