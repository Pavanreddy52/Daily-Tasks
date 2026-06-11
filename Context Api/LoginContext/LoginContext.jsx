import { useContext } from "react";
import { UserContext } from "./LoginUser";

function LoginContext() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Pavan")}>
      Login
    </button>
  );
}

export default LoginContext;