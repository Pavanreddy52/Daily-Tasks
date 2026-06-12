import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./AuthSlice";

function Login() {
  const { isLoggedIn } = useSelector((state) => state.auth); // ✅ works now
  const dispatch = useDispatch();

  return (
    <>
      <h1>{isLoggedIn ? "Logged In" : "Logged Out"}</h1>

      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
}

export default Login;