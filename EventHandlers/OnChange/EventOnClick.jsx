import React, { useState } from "react";
import OnClick from './EventOnClick';

function EventOnClick() {

  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>You typed: {name}</h3>
    </div>
  );
}

export default EventOnClick;
