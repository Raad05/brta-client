import { Outlet } from "react-router-dom";
import Footer from "../../Components/Static/Footer/Footer";

const Main = () => {
  return (
    <div className="Main">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
