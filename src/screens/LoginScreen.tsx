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
import loadImg from "../images/loader.svg";
import { useContext, useEffect, useState } from "react";
import { login } from "../api/index";
import errorLogo from "../images/error.png";
import { useFirstRender } from "../components/useFirstRender";
import { joinClassNames } from "../utils/joinClassNames";

function LoginScreen() {
  const [loading, setLoading] = useState(true);
  const { credentials, setCredentials } = useContext(
    DataContext
  ) as credentialState;
  const firstRender = useFirstRender();
  const { user, setUser } = useContext(DataContext) as userState;
  const { error, setError } = useContext(DataContext) as errorState;
  const { dataLogged, setDataLogged } = useContext(
    DataContext
  ) as dataUserState;
  let loginStyle = joinClassNames(["login", "midlog"]);

  const { register, handleSubmit } = useForm<loginData>();
  const onSubmit: SubmitHandler<loginData> = async (data) => {
    setCredentials(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!firstRender) {
      login(credentials).then(
        (result) => {
          if (result.error) {
            setLoading(true);
            setError(true);
          } else {
            setUser(true);
            setDataLogged(result);
            setLoading(true);
          }
        },

        (error) => {
          console.log(error);
        }
      );
    }
  }, [firstRender, onSubmit]);

  return (
    <>
      <div className="container">
        <img src={logo} className="logo"></img>
        <div className={loginStyle}>
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
              {loading === true ? (
                <button type="submit" value="submit" className="btn-log">
                  Login <img src={arrow} alt="arrow"></img>
                </button>
              ) : (
                <button type="submit" value="submit" className="btn-log">
                  <img src={loadImg} alt="load" className="load"></img>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
