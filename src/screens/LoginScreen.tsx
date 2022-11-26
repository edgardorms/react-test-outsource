import { DataContext } from "../context/ContextProvider";
import logo from "../images/Mercury-logotype.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  loginData,
  credentialState,
  userState,
  errorState,
  dataUserState,
} from "../types/loginTypes";
import arrow from "../images/arrow.png";
import { useContext } from "react";
import { login } from "../api/index";
import errorLogo from "../images/error.png";

function LoginScreen() {
  const { credentials, setCredentials } = useContext(
    DataContext
  ) as credentialState;

  const { user, setUser } = useContext(DataContext) as userState;
  const { error, setError } = useContext(DataContext) as errorState;
  const { dataLogged, setDataLogged } = useContext(
    DataContext
  ) as dataUserState;

  const { register, handleSubmit } = useForm<loginData>();
  const onSubmit: SubmitHandler<loginData> = async (data) => {
    setCredentials(data);
    const response = await login(credentials);

    if (response.error) {
      setError(true);
      console.log(response.error);
    } else {
      setUser(true);
      setDataLogged(response);
      console.log(dataLogged);
      console.log(response);
    }
  };

  // useEffect(() => {

  //   API();
  // }, [onSubmit]);

  return (
    <>
      <div className="container">
        <img src={logo} className="logo"></img>
        <div className="login midlog">
          <div className="welcome">
            <h1>Welcome, Stranger!</h1>
            <p className="logtext">
              Please log in this form if you wish to pass the exam.
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={error ? "form-error" : "form"}
            >
              <div>
                <div className="input-container">
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    className={error ? "input-error" : "input"}
                    placeholder="Email"
                  />
                  <img
                    src={errorLogo}
                    className={error ? "cross" : "hidden"}
                  ></img>
                </div>

                <h6 className={error ? "error-msg" : "hidden"}>
                  Incorrect email
                </h6>
              </div>
              <div>
                <div className="input-container">
                  <input
                    {...register("password", {
                      required: true,
                    })}
                    type="password"
                    className={error ? "input-error" : "input"}
                    placeholder="Password"
                  />
                  <img
                    src={errorLogo}
                    className={error ? "cross" : "hidden"}
                  ></img>
                </div>
                <h6 className={error ? "error-msg" : "hidden"}>
                  Incorrect password
                </h6>
              </div>

              <button type="submit" value="submit" className="btn-log">
                Login <img src={arrow} alt="arrow"></img>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
