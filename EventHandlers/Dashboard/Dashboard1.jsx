import { useState } from "react";
import Auth from "./Auth";
import MainUi from "./MainUi";


function Dashboard() {
  const [user, setUser] = useState(
    localStorage.getItem("currentUser") || null
  );

  return (
    <div>
      {user ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <Auth setUser={setUser} />
      )}
    </div>
  );
}

export default Dashboard;