import { useContext } from "react";
import { UserContext } from "./LoginUser";

function LoginNav() {
  const { user } = useContext(UserContext);

  return <h2>Welcome {user}</h2>;
}

export default LoginNav;