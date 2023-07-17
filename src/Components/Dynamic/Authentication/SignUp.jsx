import { Link } from "react-router-dom";
import register from "../../../assets/image 7.png";
import logo from "../../../assets/drivechain.png";

const SignUp = () => {
  return (
    <div className="SignUp mt-20">
      <div className="w-3/5 flex m-auto shadow-lg rounded-lg bg-slate-100">
        <img className="w-1/2" src={register} alt="login-image" />
        <form className="m-20 w-1/2 bg-white px-10 rounded-lg shadow-md">
          <div className="flex justify-center items-center mt-5">
            <img className="w-20" src={logo} alt="Logo" />
            <h3 className="text-3xl font-bold text-error">DriveChain</h3>
          </div>
          <div className="bg-error h-1px w-72 m-auto"></div>
          <h3 className="text-xl font-bold my-5 text-error">
            Register your account
          </h3>
          <input
            type="text"
            placeholder="NID"
            className="input input-bordered input-md w-full mb-5"
          />
          <input
            type="text"
            placeholder="username"
            className="input input-bordered input-md w-full mb-5"
          />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered input-md w-full mb-5"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered input-md w-full mb-5"
          />
          <div className="flex justify-between mb-10">
            <button
              type="submit"
              className="btn btn-error btn-sm rounded text-white"
            >
              Sign Up
            </button>
            <Link className="text-error">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
