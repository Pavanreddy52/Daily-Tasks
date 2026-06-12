import React, { useState } from "react";
import UserContext from "./UserContext";
import Profile from "./Profile";

function ProvideContext() {
  const [user] = useState({
    name: "Pavan Reddy",
    email: "pavan@gmail.com",
    role: "Frontend Developer"
  });

  return (
      <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
    
  );
}

export default ProvideContext;
