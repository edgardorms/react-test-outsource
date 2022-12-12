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
  const { isUser, setIsUser } = useContext(DataContext) as userState;
  const { isError, setIsError } = useContext(DataContext) as errorState;
  const { dataLogged, setDataLogged } = useContext(
    DataContext
  ) as dataUserState;
  let loginStyle = joinClassNames(["login", "midlog"]);

  const { register, handleSubmit, formState: { errors } } = useForm<loginData>();
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
            setIsError(true);
          } else {
            setIsUser(true);
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
            <p className="logText">
              Please log in this form if you wish to pass the exam.
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={isError ? "formError" : "form"}
            >
              <div>
                <div className="inputContainer">
                  {/* input with pattern validation */}
                  <input
                     {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email address",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email address",
                    },
                  })}
                    type="text"
                    className={isError ? "inputError" : "input"}
                    placeholder="Email"
                  />
                  <img
                    src={errorLogo}
                    className={isError ? "cross" : "hidden"}
                  ></img>
                </div>

                <h6 className={isError ? "errorMessage" : "hidden"}>
                 {errors.email?.message}
                </h6>
              </div>
              <div>
                <div className="inputContainer">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter your password",
                      },
                    })}
                    type="password"
                    className={isError ? "inputError" : "input"}
                    placeholder="Password"
                  />
                  <img
                    src={errorLogo}
                    className={isError ? "cross" : "hidden"}
                  ></img>
                </div>
                <h6 className={isError ? "errorMessage" : "hidden"}>
                {errors.password?.message  ? errors.password?.message : "Incorrect password"}
                </h6>
              </div>
              {loading === true ? (
                <button type="submit" value="submit" className="buttonLog">
                  Login <img src={arrow} alt="arrow"></img>
                </button>
              ) : (
                <button type="submit" value="submit" className="buttonLog">
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
