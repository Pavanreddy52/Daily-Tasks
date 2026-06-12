import { useState } from "react";
import Login from "./Login2";
import Employee from "./Employee";
import Manager from "./Manager";
import HR from "./Hr";
import Founder from "./Founder";

function RoleSelection() {
  const [role, setRole] = useState("");

  return (
    <div>
      {!role && <Login setRole={setRole} />}

      {role === "employee" && <Employee />}
      {role === "manager" && <Manager />}
      {role === "hr" && <HR />}
      {role === "founder" && <Founder />}
    </div>
  );
}

export default RoleSelection;