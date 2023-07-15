import { Link } from "react-router-dom";
import "../../../App.css";
import user from "../../../assets/user.png";
import home from "../../../assets/home (1) 1.png";
import licence from "../../../assets/car 1.png";
import info from "../../../assets/registration 1.png";
import appointment from "../../../assets/appointment 1.png";
import logout from "../../../assets/logout.png";
import logo from "../../../assets/drivechain.png";
import driver from "../../../assets/drivers-license 2.png";
import car from "../../../assets/car 3.png";
import doc from "../../../assets/documents 2.png";

const Records = () => {
  return (
    <div className="Records flex container mx-auto justify-between my-10">
      <div className="bg-three w-1/5 flex flex-col rounded-lg">
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
          to="/e-license"
          className="bg-four hover:bg-gray-600 duration-100 p-3 m-5 text-white rounded font-bold flex items-center"
        >
          <img src={home} className="w-8 mr-4" alt="home" />
          Scan e-license
        </Link>
        <Link className="bg-four hover:bg-gray-600 duration-100 p-3 m-5 text-white rounded font-bold flex items-center">
          <img src={licence} className="w-8 mr-4" alt="home" />
          Scan vehicle license
        </Link>
        <Link
          to="/records"
          className="bg-four p-3 m-5 rounded font-bold flex items-center bg-white"
        >
          <img src={info} className="w-8 mr-4" alt="home" />
          See records
        </Link>
        <Link className="bg-four hover:bg-gray-600 duration-100 p-3 m-5 text-white rounded font-bold flex items-center">
          <img src={appointment} className="w-8 mr-4" alt="home" />
          Contact BRTA
        </Link>
        <Link className="bg-four hover:bg-gray-600 duration-100 p-3 m-5 text-white rounded font-bold flex items-center">
          <img src={logout} className="w-8 mr-4" alt="home" />
          Logout
        </Link>
      </div>
      <div className="page w-4/5 mx-20">
        <div className="flex">
          <img src={logo} alt="logo" />
          <h1 className="text-5xl my-5">DRIVECHAIN</h1>
        </div>
        <div className="bg-three flex flex-col shadow-lg p-5 rounded-lg">
          <Link
            to="/view-vehicle-license"
            className="bg-four p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center"
          >
            View vehicle license
            <img src={driver} className="w-10" alt="document" />
          </Link>
          <Link className="bg-four p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center">
            View tax token
            <img src={car} className="w-10" alt="document" />
          </Link>
          <Link className="bg-four p-5 my-5 font-bold text-white text-xl rounded-lg flex justify-between items-center">
            View fitness certificate
            <img src={doc} className="w-10" alt="document" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Records;
