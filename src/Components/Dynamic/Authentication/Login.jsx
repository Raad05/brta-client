import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/image 6.png";
import logo from "../../../assets/drivechain.png";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newData = { ...data };
    newData[field] = value;

    setData(newData);
  };

  const login = () => {
    if (data.username === "boby") {
      navigate("/");
    } else if (data.username === "motijheel-thana") {
      navigate("/scan-e-license");
    } else {
      navigate("/e-license-applications");
    }
  };
  return (
    <div className="Login mt-40">
      <div className="w-3/5 flex m-auto shadow-lg rounded-lg bg-slate-100">
        <img className="w-1/2" src={loginImg} alt="login-image" />
        <form
          onSubmit={login}
          className="m-20 w-1/2 bg-white px-10 rounded-lg shadow-md"
        >
          <div className="flex justify-center items-center mt-5">
            <img className="w-20" src={logo} alt="Logo" />
            <h3 className="text-3xl font-bold text-error">DriveChain</h3>
          </div>
          <div className="bg-error h-1px w-72 m-auto"></div>
          <h3 className="text-xl font-bold my-5 text-error">
            Login to your account
          </h3>
          <input
            name="username"
            onBlur={handleInput}
            type="text"
            placeholder="username"
            className="input input-bordered input-md w-full mb-5"
          />
          <input
            name="password"
            onBlur={handleInput}
            type="password"
            placeholder="password"
            className="input input-bordered input-md w-full mb-5"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="btn btn-error btn-sm rounded text-white"
            >
              Log in
            </button>
            <Link className="text-error">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
