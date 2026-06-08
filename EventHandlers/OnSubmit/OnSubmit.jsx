import React, { useState } from "react";

function OnSubmit() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();   
    alert("Submitted: " + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OnSubmit;