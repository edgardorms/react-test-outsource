import { useContext } from "react";
import { DataContext } from "./context/ContextProvider";
import LoggedScreen from "./screens/LoggedScreen";
import LoginScreen from "./screens/LoginScreen";
import { userState } from "./types/loginTypes";

function App() {
  const { isUser } = useContext(DataContext) as userState;

  return isUser ? <LoggedScreen /> : <LoginScreen />;
}

export default App;
