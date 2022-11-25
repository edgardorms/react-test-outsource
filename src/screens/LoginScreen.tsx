import { DataContext } from "../context/ContextProvider";
import logo from "../images/Mercury-logotype.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginData, credentialState } from "../types/loginTypes";
import arrow from "../images/arrow.png";
import { useState, useEffect, useContext } from "react";
import { login } from "../api/index";

function LoginScreen() {
  const { credentials, setCredentials } = useContext(
    DataContext
  ) as credentialState;

  //const [token, setToken] = useState<loginData>({ password: "", email: "" });
  const { register, handleSubmit } = useForm<loginData>();
  const onSubmit: SubmitHandler<loginData> = (data) => setCredentials(data);

  useEffect(() => {
    async function API() {
      const response = await login(credentials);
      //console.log(response);
    }
    API();
  }, [onSubmit]);

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
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Field required!",
                  },
                })}
                type="email"
                className="input"
                placeholder="Email"
              />

              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Field required!",
                  },
                })}
                type="password"
                className="input"
                placeholder="Password"
              />

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
