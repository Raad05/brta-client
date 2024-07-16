/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../../../App.css";
import user from "../../../assets/user.png";
import home from "../../../assets/home (1) 1.png";
import licence from "../../../assets/car 1.png";
import info from "../../../assets/registration 1.png";
import appointment from "../../../assets/appointment 1.png";
import payment from "../../../assets/payment-method 1.png";
import history from "../../../assets/payment.png";
import logout from "../../../assets/logout.png";
import logo from "../../../assets/drivechain.png";
import document from "../../../assets/documents 1.png";
import licensing from "../../../assets/licensing 1.png";
import certificate from "../../../assets/certificate 1.png";
import clipboard from "../../../assets/clipboard 1.png";
import calender from "../../../assets/calendar 1.png";
import { MdToken } from "react-icons/md";

const BSPPanel = () => {
  return (
    <div className="BSP-panel flex container m-auto justify-between mt-20">
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
          className="bg-two p-3 mx-5 my-2 rounded-lg font-bold flex items-center bg-white"
        >
          <img src={home} className="w-8 mr-4" alt="home" />
          Home
        </Link>
        <Link
          to="/marketplace"
          className="bg-two p-3 mx-5 my-2 rounded-lg font-bold flex items-center"
        >
          <MdToken size={30}></MdToken>
          <span className="mx-2">NFT Marketplace</span>
        </Link>
        <Link
          to="/license-application"
          className="bg-two p-3 mx-5 my-2 rounded font-bold flex items-center"
        >
          <img src={licence} className="w-8 mr-4" alt="home" />
          Driving License
        </Link>
        <Link
          to="/vehicle-information"
          className="bg-two p-3 mx-5 my-2 rounded font-bold flex items-center"
        >
          <img src={info} className="w-8 mr-4" alt="home" />
          Vehicle Information
        </Link>
        <Link className="bg-two p-3 mx-5 my-2 rounded font-bold flex items-center">
          <img src={appointment} className="w-8 mr-4" alt="home" />
          Appointment
        </Link>
        <Link className="bg-two p-3 mx-5 my-2 rounded font-bold flex items-center">
          <img src={payment} className="w-8 mr-4" alt="home" />
          Payment
        </Link>
        <Link className="bg-two p-3 mx-5 my-2 rounded font-bold flex items-center">
          <img src={history} className="w-8 mr-4" alt="home" />
          Payment History
        </Link>
        <Link
          to="/login"
          className="bg-two p-3 mx-5 my-2 rounded font-bold flex items-center"
        >
          <img src={logout} className="w-8 mr-4" alt="home" />
          Logout
        </Link>
      </div>
      <div className="page w-4/5 mx-20">
        <div className="flex">
          <img src={logo} alt="logo" />
          <h1 className="text-5xl my-5">DRIVECHAIN</h1>
        </div>
        <div className="flex flex-col shadow-lg p-5 rounded">
          <Link className="bg-one p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center">
            Learner's license information
            <img src={document} className="w-10" alt="document" />
          </Link>
          <Link className="bg-one p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center">
            Driving license information
            <img src={licensing} className="w-10" alt="document" />
          </Link>
          <Link className="bg-one p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center">
            Vehicle registration
            <img src={certificate} className="w-10" alt="document" />
          </Link>
          <Link className="bg-one p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center">
            Apply for driving License
            <img src={clipboard} className="w-10" alt="document" />
          </Link>
          <Link className="bg-one p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center">
            Appointment time table
            <img src={calender} className="w-10" alt="document" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BSPPanel;
