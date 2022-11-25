import { useState, useContext } from "react";
import {DataContext} from './context/ContextProvider';
import LoggedScreen from "./screens/LoggedScreen";
import LoginScreen from "./screens/LoginScreen";
import { joinClassNames } from "./utils/joinClassNames";
import {userState, credentialState} from './types/loginTypes'

function App() {
  const { user, setUser} = useContext(DataContext) as userState
  
  //let classBtn = joinClassNames(["lmn-button", "lmn-button-primary"]);
  return user ? <LoggedScreen /> : <LoginScreen />;
}

export default App;
