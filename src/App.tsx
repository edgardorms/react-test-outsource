import { useState } from "react";
import LoggedScreen from "./screens/LoggedScreen";
import LoginScreen from "./screens/LoginScreen";
import { joinClassNames } from "./utils/joinClassNames";

function App() {
  const [user, setUser] = useState();
  let classBtn = joinClassNames(["lmn-button", "lmn-button-primary"]);

  return user ? <LoggedScreen /> : <LoginScreen />;
}

export default App;
