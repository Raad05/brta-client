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
import ELicenseDetails from "./ELicenseDetails";

const ELicenseApplications = () => {
  const details = [
    {
      nidNo: "123",
      name: "123",
      userDocuments: "Hit and Run",
      date: "Today",
      approval: "Pending",
    },
    {
      nidNo: "123",
      name: "123",
      userDocuments: "Hit and Run",
      date: "Today",
      approval: "Pending",
    },
    {
      nidNo: "123",
      name: "123",
      userDocuments: "Hit and Run",
      date: "Today",
      approval: "Pending",
    },
  ];

  let i = 0;

  return (
    <div className="E-license-applications flex container m-auto justify-between mt-20">
      <div className="bg-seven w-1/5 flex flex-col rounded-lg">
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
        <Link className="bg-eight p-3 mx-5 my-2 rounded-lg font-bold flex items-center bg-white">
          <img src={home} className="w-8 mr-4" alt="home" />
          E-License Applications
        </Link>
        <Link
          to="/vehicle-registration"
          className="bg-eight p-3 mx-5 my-2 rounded font-bold flex items-center"
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
        <div className="bg-eight p-10 rounded-lg">
          <div className="p-5 bg-white rounded-lg">
            <h3 className="text-xl text-center mb-5 font-bold">Applications</h3>
            <div className="overflow-x-auto shadow-lg rounded-lg bg-eight">
              <table className="table table-zebra">
                {/* head */}
                <thead className="bg-seven text-white">
                  <tr>
                    <th>SL</th>
                    <th>NID No.</th>
                    <th>Name</th>
                    <th>User Documents</th>
                    <th>Date</th>
                    <th>Approval</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail, idx) => (
                    <ELicenseDetails
                      key={idx}
                      detail={detail}
                      serial={++i}
                    ></ELicenseDetails>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELicenseApplications;
