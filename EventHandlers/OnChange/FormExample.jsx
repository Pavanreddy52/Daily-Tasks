import React from "react";
import FormSubmit from './FormExample';

function FormExample() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div>
      <h2>onSubmit Example</h2>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormExample;
