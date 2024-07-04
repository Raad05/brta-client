import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ELicense from "../Components/Dynamic/LEA/ELicense";
import Records from "../Components/Dynamic/LEA/Records";
import VehicleLicense from "../Components/Dynamic/LEA/VehicleLicense";
import RecordList from "../Components/Dynamic/LEA/RecordList";
import LicenseApplication from "../Components/Dynamic/BSP/LicenseApplication";
import VehicleRegistration from "../Components/Dynamic/CircleOffice/VehicleRegistration";
import Login from "../Components/Dynamic/Authentication/Login";
import SignUp from "../Components/Dynamic/Authentication/SignUp";
import ELicenseApplications from "../Components/Dynamic/CircleOffice/ELicenseApplications";
import TransferOwnership from "../Components/Dynamic/BSP/TransferOwnership";
import AcceptOwnership from "../Components/Dynamic/CircleOffice/AcceptOwnership";
import ScanLicense from "../Components/Dynamic/LEA/ScanLicense";
import VehicleInformation from "../Components/Dynamic/BSP/VehicleInformation";
import HomePage from "../Components/Dynamic/BSP/HomePage";
import BSPPanel from "../Components/Dynamic/BSP/BSPPanel";
import Marketplace from "../Components/Dynamic/Marketplace/Marketplace";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/bsp-panel",
        element: <BSPPanel></BSPPanel>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/e-license",
        element: <ELicense></ELicense>,
      },
      {
        path: "/records",
        element: <Records></Records>,
      },
      {
        path: "/view-vehicle-license",
        element: <VehicleLicense></VehicleLicense>,
      },
      {
        path: "/record-list",
        element: <RecordList></RecordList>,
      },
      {
        path: "/license-application",
        element: <LicenseApplication></LicenseApplication>,
      },
      {
        path: "/vehicle-registration",
        element: <VehicleRegistration></VehicleRegistration>,
      },
      {
        path: "/e-license-applications",
        element: <ELicenseApplications></ELicenseApplications>,
      },
      {
        path: "/transfer-ownership",
        element: <TransferOwnership></TransferOwnership>,
      },
      {
        path: "/confirm-ownership",
        element: <AcceptOwnership></AcceptOwnership>,
      },
      {
        path: "/scan-e-license",
        element: <ScanLicense></ScanLicense>,
      },
      {
        path: "/vehicle-information",
        element: <VehicleInformation></VehicleInformation>,
      },
      {
        path: "/marketplace",
        element: <Marketplace></Marketplace>,
      },
    ],
  },
]);
