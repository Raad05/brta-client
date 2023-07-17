/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import user from "../../../assets/user.png";
import home from "../../../assets/home (1) 1.png";
import licence from "../../../assets/car 1.png";
import info from "../../../assets/registration 1.png";
import appointment from "../../../assets/appointment 1.png";
import payment from "../../../assets/payment-method 1.png";
import history from "../../../assets/payment.png";
import logout from "../../../assets/logout.png";
import avatar from "../../../assets/avatar7 2.png";

const HomePage = () => {
  const navigate = useNavigate();

  const applyForLicense = () => {
    navigate("/license-application");
  };

  return (
    <div className="Home-page flex container m-auto justify-between mt-20">
      <div className="bg-one w-1/5 flex flex-col rounded-lg">
        <div className="p-5">
          <h3 className="text-3xl text-white font-bold">BSP</h3>
          <div className="flex my-2">
            <img src={user} alt="user" />
            <div className="ml-2">
              <h6 className="text-white font-bold text-lg">Welcome,</h6>
              <h3 className="text-white font-bold text-3xl">Bobby Mia</h3>
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="bg-two p-3 m-5 rounded-lg font-bold flex items-center bg-white"
        >
          <img src={home} className="w-8 mr-4" alt="home" />
          Home
        </Link>
        <Link className="bg-two p-3 m-5 rounded font-bold flex items-center">
          <img src={licence} className="w-8 mr-4" alt="home" />
          Driving License
        </Link>
        <Link
          to="/vehicle-information"
          className="bg-two p-3 m-5 rounded font-bold flex items-center"
        >
          <img src={info} className="w-8 mr-4" alt="home" />
          Vehicle Information
        </Link>
        <Link className="bg-two p-3 m-5 rounded font-bold flex items-center">
          <img src={appointment} className="w-8 mr-4" alt="home" />
          Appointment
        </Link>
        <Link className="bg-two p-3 m-5 rounded font-bold flex items-center">
          <img src={payment} className="w-8 mr-4" alt="home" />
          Payment
        </Link>
        <Link className="bg-two p-3 m-5 rounded font-bold flex items-center">
          <img src={history} className="w-8 mr-4" alt="home" />
          Payment History
        </Link>
        <Link className="bg-two p-3 m-5 rounded font-bold flex items-center">
          <img src={logout} className="w-8 mr-4" alt="home" />
          Logout
        </Link>
      </div>
      <div className="page w-4/5 mx-20 px-40 mt-20 shadow-lg rounded-lg bg-slate-100">
        <img className="w-40 my-10 m-auto" src={avatar} alt="avatar" />
        <div className="bg-one rounded-lg">
          <div className="flex justify-between p-10">
            <div className="text-xl">
              <p className="my-2">
                <span className=" font-bold">Name: </span> Bobby Mia
              </p>
              <p className="my-2">
                <span className=" font-bold">Username: </span>boby
              </p>
            </div>
            <div className="text-xl">
              <p className="my-2">
                Driving license:{" "}
                <span className="text-red-600 font-bold">No</span>
              </p>
              <p className="my-2">
                Driving license:{" "}
                <span className="text-red-600 font-bold">No</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center py-5">
            <button
              onClick={applyForLicense}
              className="btn font-bold rounded-2xl"
            >
              Apply for License
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
