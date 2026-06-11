import LoginContext from './LoginContext';
import LoginNav from './LoginNav'
import LoginProvider from "./LoginProvider";
import Login from '../../Conditional Redering/Task/Login2';

function MainApp() {
  return (
    <LoginProvider>
        <LoginNav />
      <LoginContext />
      
    </LoginProvider>
  );
}

export default MainApp;