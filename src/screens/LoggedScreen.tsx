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
  const { isUser, setIsUser } = useContext(DataContext) as userState;
  const { isError, setIsError } = useContext(DataContext) as errorState;
  const { dataLogged, setDataLogged } = useContext(
    DataContext
  ) as dataUserState;
  const {  setCredentials } = useContext(
    DataContext
  ) as credentialState;
  let loggedStyle = joinClassNames(["logged", "midlogged"]);

  const userLogged = dataLogged.data;
  function Logout() {
    setIsUser(false);
    setIsError(false);
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
            <button onClick={() => Logout()} className="buttonLog">
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
