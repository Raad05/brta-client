import { Link } from "react-router-dom";
import "../../../App.css";
import user from "../../../assets/user.png";
import home from "../../../assets/home (1) 1.png";
import licence from "../../../assets/car 1.png";
import info from "../../../assets/registration 1.png";
import appointment from "../../../assets/appointment 1.png";
import logout from "../../../assets/logout.png";
import logo from "../../../assets/drivechain.png";
import image3 from "../../../assets/images 3.png";
import gov from "../../../assets/Government of Bangladesh Logo English 2.png";
import photo from "../../../assets/add-photo 1.png";
import nid from "../../../assets/Group 6.svg";
import { useState } from "react";

const ELicense = () => {
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newData = { ...data };

    newData[field] = value;
    if (newData["licenseNo"] === " ") {
      setData({ licenseNo: "DK21909019213L0304043" });
    } else {
      setData(newData);
    }
  };

  const createData = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="E-License flex container m-auto justify-between items-center mt-10">
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
          className="bg-four hover:bg-gray-600 p-3 mx-5 my-2 rounded font-bold flex items-center text-white"
        >
          <img src={home} className="w-8 mr-4" alt="home" />
          Scan e-license
        </Link>
        <Link className="bg-four hover:bg-gray-600 duration-100 p-3 mx-5 my-2 rounded font-bold flex items-center bg-white">
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
      <div className="page w-4/5 mx-20">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <h1 className="text-5xl my-5">DRIVECHAIN</h1>
        </div>
        <form
          onSubmit={createData}
          className="flex shadow-lg px-5 py-10 rounded-lg bg-four"
        >
          <div className="w-1/2">
            <div className="bg-white rounded-lg">
              <div className="flex justify-between px-3 py-5">
                <div className="flex items-center">
                  <img src={image3} alt="image-3" className="mr-2" />
                  <h3 className="text-xl">Incident Form</h3>
                </div>
                <div className="flex items-center">
                  <div className="gono">
                    <h3 className="text-right">গণপ্রজাতন্ত্রী বাংলাদেশ</h3>
                    <h3 className="text-right">
                      Peoples Republic of Bangladesh
                    </h3>
                  </div>
                  <img src={gov} alt="govt" className="ml-2" />
                </div>
              </div>
              <hr className="mx-5" />
              <div className="input-fields p-5">
                <p>Type of incident</p>
                <input
                  required
                  onBlur={handleInput}
                  name="incident"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
                <p>Incident Time</p>
                <input
                  required
                  onBlur={handleInput}
                  name="incidentTime"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
                <p>Incident Location</p>
                <input
                  required
                  onBlur={handleInput}
                  name="incidentLocation"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
                <p>Description</p>
                <input
                  required
                  onBlur={handleInput}
                  name="description"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
                <p>Officer in Charge</p>
                <input
                  required
                  onBlur={handleInput}
                  name="officerInCharge"
                  type="text"
                  className="border border-gray-400 w-full rounded py-1 px-3 mb-5"
                />
              </div>
              <div className="flex px-5">
                <h3>Upload photos:</h3>
                <div className="w-28 h-28 bg-five flex justify-center items-center p-5 ml-16 rounded">
                  <img src={photo} alt="photo" className="w-24" />
                </div>
              </div>
              <div className="flex justify-center py-5">
                <input
                  type="file"
                  className="file-input file-input-ghost w-full max-w-xs"
                />
              </div>
            </div>
          </div>
          <div className="card w-1/2 p-5">
            <h3 className="text-white my-5 text-xl">
              E-license of the culprit
            </h3>
            <img src={nid} alt="nid" />
            <div className="bg-six text-center px-5 rounded-lg py-5 text-xl my-10">
              <h6>License No.</h6>
              <p>
                DK21909019213L0304043 <br />
                or,
              </p>
              <p className="my-2">Enter Manually</p>
              <input
                onBlur={handleInput}
                name="licenseNo"
                type="text"
                className="border border-gray-400 w-full rounded py-1 px-3"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-wide">
                Submit Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ELicense;
