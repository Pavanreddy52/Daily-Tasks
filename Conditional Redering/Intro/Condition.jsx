function Condition(){
    const isLoggedIn=false;
    return(
        <div>
            {isLoggedIn?<h1>Welcome User</h1>: <h1>Please Login</h1>}
        </div>

    );
}
export default Condition;