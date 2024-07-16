import { Link } from "react-router-dom";
import "../../../App.css";
import user from "../../../assets/user.png";
import home from "../../../assets/home (1) 1.png";
import licence from "../../../assets/car 1.png";
import info from "../../../assets/registration 1.png";
import appointment from "../../../assets/appointment 1.png";
import logout from "../../../assets/logout.png";
import upload from "../../../assets/Vector.svg";

const ScanLicense = () => {
  return (
    <div className="Scan-license flex container m-auto justify-between items-center mt-20">
      <div className="bg-three w-1/5 flex flex-col rounded-lg">
        <div className="p-5">
          <h3 className="text-3xl text-white font-bold">LEA</h3>
          <div className="flex my-2">
            <img src={user} alt="user" />
            <div className="ml-2">
              <h6 className="text-white font-bold text-lg">Welcome,</h6>
              <h3 className="text-white font-bold text-3xl">Bobby Mia</h3>
            </div>
          </div>
        </div>
        <Link
          to="/scan-e-license"
          className="bg-four p-3 mx-5 my-2 rounded font-bold flex items-center bg-white"
        >
          <img src={home} className="w-8 mr-4" alt="home" />
          Scan e-license
        </Link>
        <Link
          to="/e-license"
          className="bg-four hover:bg-gray-600 duration-100 p-3 mx-5 my-2 text-white rounded font-bold flex items-center"
        >
          <img src={licence} className="w-8 mr-4" alt="home" />
          Scan vehicle license
        </Link>
        <Link
          to="/record-list"
          className="bg-four hover:bg-gray-600 duration-100 p-3 mx-5 my-2 text-white rounded font-bold flex items-center"
        >
          <img src={info} className="w-8 mr-4" alt="home" />
          See records
        </Link>
        <Link className="bg-four hover:bg-gray-600 duration-100 p-3 mx-5 my-2 text-white rounded font-bold flex items-center">
          <img src={appointment} className="w-8 mr-4" alt="home" />
          Contact BRTA
        </Link>
        <Link className="bg-four hover:bg-gray-600 duration-100 p-3 mx-5 my-2 text-white rounded font-bold flex items-center">
          <img src={logout} className="w-8 mr-4" alt="home" />
          Logout
        </Link>
      </div>
      <div className="page w-4/5 mx-20 bg-three rounded-lg p-10">
        <div className="w-full bg-white rounded-lg p-5">
          <div className="bg-white w-full border border-dashed border-black rounded-lg py-20">
            <img src={upload} alt="upload" className="mx-auto mb-10" />
            <p className="text-xl text-center">
              Drop an image file(JPG, PNG, BMP and more)
            </p>
            <div className="flex justify-center">
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-1/2 mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanLicense;
