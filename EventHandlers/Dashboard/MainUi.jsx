function MainUi({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <div>
      <h1>Welcome {user} 🎉</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default MainUi;