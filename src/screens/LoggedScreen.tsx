import logo from "../images/Mercury-logotype.svg";
import door from "../images/door.png";
import {
  errorState,
  userState,
  dataUserState,
  credentialState,
} from "../types/loginTypes";
import { useContext } from "react";
import { DataContext } from "../context/ContextProvider";
import { joinClassNames } from "../utils/joinClassNames";

function LoggedScreen() {
  const { user, setUser } = useContext(DataContext) as userState;
  const { error, setError } = useContext(DataContext) as errorState;
  const { dataLogged, setDataLogged } = useContext(
    DataContext
  ) as dataUserState;
  const { credentials, setCredentials } = useContext(
    DataContext
  ) as credentialState;
  let loggedStyle = joinClassNames(["logged", "midlogged"]);

  const userLogged = dataLogged.data;
  function Logout() {
    setUser(false);
    setError(false);
    setCredentials({
      password: "",
      email: "",
    });
  }
  return (
    <>
      <div className="container">
        <img src={logo} className="logo"></img>
        <div className={loggedStyle}>
          <div className="greeting">
            <img src={userLogged?.avatar} alt="user" className="avatar" />
            <h1>That's it, {userLogged?.name}!</h1>
            <button onClick={() => Logout()} className="btn-log">
              {" "}
              <img src={door} alt="door" /> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoggedScreen;
