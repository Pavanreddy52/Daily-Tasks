import { useContext } from "react";
import { AuthContext } from "./Authentication";

function Navbar1() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome {user.name}</p>

          {user.role === "admin" && <button>Admin Panel</button>}

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}

export default Navbar1;