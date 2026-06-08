import React from "react";
import useFetch from "./useFetch";

function Users() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error occurred</h2>;

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
