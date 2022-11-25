import { useState, useContext } from "react";
import {DataContext} from './context/ContextProvider';
import LoggedScreen from "./screens/LoggedScreen";
import LoginScreen from "./screens/LoginScreen";
import { joinClassNames } from "./utils/joinClassNames";
import {UserState, credentialState} from './types/loginTypes'

function App() {
  const { user, setUser} = useContext(DataContext) as UserState
  
  //let classBtn = joinClassNames(["lmn-button", "lmn-button-primary"]);
  return user ? <LoggedScreen /> : <LoginScreen />;
}

export default App;
