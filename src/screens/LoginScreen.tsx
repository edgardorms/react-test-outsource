import logo from "../utils/Mercury-logotype.svg";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  password: string;
  email: string;
};

function LoginScreen() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
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
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Email"
              />

              <input
                {...register("password", { required: true })}
                type="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" value="submit" className="btn-log">
                Login ➡
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
