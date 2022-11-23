import logo from "../utils/Mercury-logotype.svg";
import avatar from "../utils/avatar.jpeg";

function LoggedScreen() {
  return (
    <>
      <div className="container">
        <img src={logo} className="logo"></img>
        <div className="logged midlogged">
          <div className="greeting">
            <img src={avatar} alt="user" className="avatar" />
            <h1>That's it, Elon!</h1>
            <button className="btn-log">🚪 Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoggedScreen;
