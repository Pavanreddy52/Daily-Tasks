import { useState } from "react";
import { UserContext } from "./LoginUser";

function LoginProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} 
    </UserContext.Provider>
  );
}

export default LoginProvider;