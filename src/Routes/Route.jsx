import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Components/Dynamic/Home/Home";
import ELicense from "../Components/Dynamic/ELicense/ELicense";
import Records from "../Components/Dynamic/Records/Records";
import VehicleLicense from "../Components/Dynamic/VehicleLicense/VehicleLicense";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
    ],
  },
]);
