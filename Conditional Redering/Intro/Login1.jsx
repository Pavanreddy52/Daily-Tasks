import React, { useState } from "react";

function Login1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userProfile = {
    name: "Pavan Reddy",
    email: "pavan@gmail.com",
    role: "Frontend Developer",
    location: "Hyderabad"
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div >

      {isLoggedIn ? (
        <>
          <h2>Welcome {userProfile.name} </h2>

          <div>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Role:</strong> {userProfile.role}</p>
            <p><strong>Location:</strong> {userProfile.location}</p>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}

    </div>
  );
}

export default Login1;
