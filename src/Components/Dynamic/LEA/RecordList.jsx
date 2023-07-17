import { Link } from "react-router-dom";
import "../../../App.css";
import user from "../../../assets/user.png";
import home from "../../../assets/home (1) 1.png";
import licence from "../../../assets/car 1.png";
import info from "../../../assets/registration 1.png";
import appointment from "../../../assets/appointment 1.png";
import logout from "../../../assets/logout.png";
import logo from "../../../assets/drivechain.png";
import RecordDetails from "./RecordDetails";

const RecordList = () => {
  const details = [
    {
      licenseNo: "123",
      txId: "123",
      offenseType: "Hit and Run",
      date: "Ajke",
    },
    {
      licenseNo: "123",
      txId: "123",
      offenseType: "Hit and Run",
      date: "Ajke",
    },
    {
      licenseNo: "123",
      txId: "123",
      offenseType: "Hit and Run",
      date: "Ajke",
    },
  ];

  let i = 0;

  return (
    <div className="Vehicle-license flex container mx-auto justify-between my-10">
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
          to="/record-list"
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
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-three text-white">
              <tr>
                <th>SL</th>
                <th>License No.</th>
                <th>TxID</th>
                <th>Offense Type</th>
                <th>Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, idx) => (
                <RecordDetails
                  key={idx}
                  detail={detail}
                  serial={++i}
                ></RecordDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecordList;
