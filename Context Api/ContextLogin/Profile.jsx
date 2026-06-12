import React, { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {user.name} </h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Profile;
