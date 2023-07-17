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
import { useState } from "react";

const LicenseApplication = () => {
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
    <div className="License-application flex container m-auto justify-between mt-20">
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
          to="/bsp-panel"
          className="bg-two p-3 m-5 rounded-lg font-bold flex items-center"
        >
          <img src={home} className="w-8 mr-4" alt="home" />
          Home
        </Link>
        <Link className="bg-two p-3 m-5 rounded font-bold flex items-center bg-white">
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
        <Link
          to="/login"
          className="bg-two p-3 m-5 rounded font-bold flex items-center"
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
          <h3 className="text-2xl font-bold mx-10">
            Learner License Application
          </h3>
          <hr className="mx-10 mt-2" />
          <div className="license-type flex m-5">
            <div className="w-1/2">
              <h6>
                Driver License Type
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <select
                onBlur={handleInput}
                name="vehicleClass"
                className="select border border-black select-sm w-full rounded"
              >
                <option disabled selected>
                  Select Type
                </option>
                <option value="Professional">Professional</option>
                <option value="Non-professional">Non-professional</option>
              </select>
            </div>
          </div>
          <h3 className="text-xl font-bold mx-10">Section A</h3>
          <hr className="mx-10 mt-2" />
          <div className="grid grid-cols-2 gap-x-5 p-5">
            <div className="exam-venue">
              <h6>
                National Identity No.
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="nid"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="dob">
              <h6>
                Date of Birth<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="dob"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="name">
              <h6>
                Name<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="name"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="father">
              <h6>
                Father's Name<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="father"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="mother">
              <h6>
                Mother's Name<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="mother"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="gender">
              <h6>
                Gender<span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="gender"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="marital-status">
              <h6>Marital status:</h6>
              <select
                onBlur={handleInput}
                name="married"
                className="select border border-black select-sm w-full rounded"
              >
                <option disabled selected>
                  Marital status
                </option>
                <option value="married">Married</option>
                <option value="notMarried">Not married</option>
              </select>
            </div>
            <div className="spouse">
              <h6>Spouse Name:</h6>
              <input
                onBlur={handleInput}
                required
                name="spouse"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="occupation">
              <h6>Occupation:</h6>
              <input
                onBlur={handleInput}
                required
                name="occupation"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="blood">
              <h6>
                Blood Group<span className="text-red-400 font-bold">*</span> :
              </h6>
              <select
                onBlur={handleInput}
                name="blood"
                className="select border border-black select-sm w-full rounded"
              >
                <option disabled selected>
                  Blood group
                </option>
                <option value="A-positive">A+</option>
                <option value="A-negative">A-</option>
                <option value="B-positive">B+</option>
                <option value="B-negative">B-</option>
                <option value="O-positive">O+</option>
                <option value="O-negative">O-</option>
                <option value="AB-positive">AB+</option>
              </select>
            </div>
          </div>
          <div className="flex justify-around">
            <h3 className="text-xl font-bold mx-10">Present Address</h3>
            <h3 className="text-xl font-bold mx-10">Parmanent Address</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-5 p-5">
            <div className="grid grid-cols-2 gap-x-5 p-5">
              <div className="village">
                <h6>
                  Village/House<span className="text-red-400 font-bold">*</span>{" "}
                  :
                </h6>
                <input
                  onBlur={handleInput}
                  required
                  name="village"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="block">
                <h6>Road/Block/Sector:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="block"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="division">
                <h6>
                  Division<span className="text-red-400 font-bold">*</span> :
                </h6>
                <select
                  onBlur={handleInput}
                  name="blood"
                  className="select border border-black select-sm w-full rounded"
                >
                  <option disabled selected>
                    Select division
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Mymensingh">Mymensingh</option>
                </select>
              </div>
              <div className="district">
                <h6>
                  District<span className="text-red-400 font-bold">*</span> :
                </h6>
                <select
                  onBlur={handleInput}
                  name="district"
                  className="select border border-black select-sm w-full rounded"
                >
                  <option disabled selected>
                    Select division
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Mymensingh">Mymensingh</option>
                </select>
              </div>
              <div className="thana">
                <h6>
                  Thana<span className="text-red-400 font-bold">*</span> :
                </h6>
                <input
                  onBlur={handleInput}
                  required
                  name="thana"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="postCode">
                <h6>Post Code:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="postCode"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5 p-5">
              <div className="village">
                <h6>Village/House:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="village"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="block">
                <h6>Road/Block/Sector:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="block"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="division">
                <h6>Division:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="division"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="district">
                <h6>District:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="district"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="thana">
                <h6>Thana:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="thana"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="postCode">
                <h6>Post Code:</h6>
                <input
                  onBlur={handleInput}
                  required
                  name="postCode"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold mx-10">For learner license issue</h3>
          <hr className="mx-10 mt-2" />
          <div className="grid grid-cols-2 gap-x-5 p-5">
            <div className="instructorDrivingLicense">
              <h6>
                Instructor's driving license No.
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="instructorLicense"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="exam-venue">
              <h6>
                Exam Venue
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                required
                name="examVenue"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
              />
            </div>
            <div className="vehicleClass">
              <h6>Marital status:</h6>
              <select
                onBlur={handleInput}
                name="vehicleClass"
                className="select border border-black select-sm w-full rounded"
              >
                <option disabled selected>
                  Select Class
                </option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Light">Light</option>
              </select>
            </div>
          </div>
          <h3 className="text-lg font-bold mx-10">Attachments</h3>
          <hr className="mx-10 mt-2" />
          <div className="grid grid-cols-2 gap-x-5 p-5">
            <div className="medical-certificate">
              <h6>
                Attach Medical Certificate
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
            <div className="citizenship">
              <h6>
                Attach National ID/Birth Certificate/Passport/Citizen
                Certificate
                <span className="text-red-400 font-bold">*</span> :
              </h6>
              <input
                onBlur={handleInput}
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
            <div className="utility">
              <h6>Attach Utility Bill:</h6>
              <input
                onBlur={handleInput}
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
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

export default LicenseApplication;
