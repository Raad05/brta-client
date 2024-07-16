/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../../../App.css";
import user from "../../../assets/user.png";
import home from "../../../assets/home (1) 1.png";
import licence from "../../../assets/car 1.png";
import info from "../../../assets/registration 1.png";
import appointment from "../../../assets/appointment 1.png";
import logout from "../../../assets/logout.png";
import logo from "../../../assets/drivechain.png";
import { useState } from "react";

const VehicleRegistration = () => {
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newData = { ...data };
    newData[field] = value;

    setData(newData);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="Vehicle-registration flex container m-auto justify-between mt-20">
      <div className="bg-seven w-1/5 flex flex-col rounded-lg h-1/2">
        <div className="p-5">
          <h3 className="text-3xl text-white font-bold">BSP - Circle Office</h3>
          <div className="flex my-2">
            <img src={user} alt="user" />
            <div className="ml-2">
              <h6 className="text-white font-bold text-lg">Welcome,</h6>
              <h3 className="text-white font-bold text-3xl">Bobby Mia</h3>
            </div>
          </div>
        </div>
        <Link
          to="/e-license-applications"
          className="bg-eight p-3 mx-5 my-2 rounded-lg font-bold flex items-center"
        >
          <img src={home} className="w-8 mr-4" alt="home" />
          E-License Applications
        </Link>
        <Link
          to="/vehicle-registration"
          className="bg-eight p-3 mx-5 my-2 rounded font-bold flex items-center bg-white"
        >
          <img src={licence} className="w-8 mr-4" alt="home" />
          Vehicle License Application
        </Link>
        <Link className="bg-eight p-3 mx-5 my-2 rounded font-bold flex items-center">
          <img src={info} className="w-8 mr-4" alt="home" />
          Tax Token Applications
        </Link>
        <Link className="bg-eight p-3 mx-5 my-2 rounded font-bold flex items-center">
          <img src={appointment} className="w-8 mr-4" alt="home" />
          Fitness Certificates
        </Link>
        <Link className="bg-eight p-3 mx-5 my-2 rounded font-bold flex items-center">
          <img src={licence} className="w-8 mr-4" alt="home" />
          Freeze Certificates
        </Link>
        <Link
          to="/login"
          className="bg-eight p-3 mx-5 my-2 rounded font-bold flex items-center"
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
        <form onSubmit={submitForm} className="license-form shadow-lg">
          <h3 className="text-xl font-bold mx-10">Section A</h3>
          <hr className="mx-10 mt-2" />
          <div className="grid grid-cols-2 gap-x-5 p-5">
            <div className="vehicle-number">
              <h6>
                Vehicle number
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="vehicleNumber"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="vehicle-description">
              <h6>
                Vehicle description
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="VehicleDescription"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="class">
              <h6>
                Class<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="class"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="cc">
              <h6>
                Vehicle CC<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="cc"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="engineNo">
              <h6>
                Engine number<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="engineNo"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="wheel-base">
              <h6>
                Wheel base<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="wheelBase"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="date">
              <h6>
                Date<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="date"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="color">
              <h6>
                Vehicle color<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="color"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="fuel">
              <h6>
                Vehicle Fuel<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="fuel"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="seat">
              <h6>
                Seat<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="seat"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="chasis">
              <h6>
                Chasis<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="chasis"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="weight">
              <h6>
                Weight<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="weight"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mx-10">Section B</h3>
          <hr className="mx-10 mt-2" />
          <div className="grid grid-cols-2 gap-x-5 p-5">
            <div className="front-part">
              <h6>
                Front Part
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
            <div className="back-part">
              <h6>
                Back Part
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
            <div className="left-part">
              <h6>
                Left Part
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
            <div className="right-part">
              <h6>
                Right Part
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mx-10">Section C</h3>
          <hr className="mx-10 mt-2" />
          <div className="grid grid-cols-2 gap-x-5 p-5">
            <div className="first-owner">
              <h6>
                First Owner ID<span className="text-red-400 font-bold">*</span>{" "}
                :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="firstOwner"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
          </div>
          <div className="flex justify-center py-5">
            <button
              type="submit"
              className="btn bg-orange-400 hover:bg-orange-500 text-white"
            >
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleRegistration;
