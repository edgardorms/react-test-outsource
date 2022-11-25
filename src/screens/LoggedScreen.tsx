import logo from "../images/Mercury-logotype.svg";
import avatar from "../images/avatar.jpeg";
import door from '../images/door.png'
import { UserState } from "../types/loginTypes";
import { useContext } from "react";
import { DataContext } from "../context/ContextProvider";

function LoggedScreen() {
  const { user, setUser } = useContext(DataContext) as UserState;
  function Logout() {
    setUser(false)
  }
  return (
    <>
      <div className="container">
        <img src={logo} className="logo"></img>
        <div className="logged midlogged">
          <div className="greeting">
            <img src={avatar} alt="user" className="avatar" />
            <h1>That's it, Elon!</h1>
            <button onClick={()=> Logout()} className="btn-log"> <img src={door} alt="door" /> Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoggedScreen;
