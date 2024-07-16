import logo from "../../../assets/drivechain_new.png";
import { FaRegUserCircle } from "react-icons/fa";
import NFTCard from "../NFTCard/NFTCard";
import { Link } from "react-router-dom";
import skyline from "../../../assets/cars/skyline.jpg";
import supra from "../../../assets/cars/supra.jpg";
import mazda from "../../../assets/cars/mazda.jpg";
import audi from "../../../assets/cars/audi.jpg";
import lambo from "../../../assets/cars/lamborghini.jpg";
import r35 from "../../../assets/cars/r35.jpg";
import corolla from "../../../assets/cars/corolla.jpg";

const cars = [
  {
    image: skyline,
    name: "Skyline R34",
    description: "Nissan Skyline R34 V-spec II",
    price: "forBid",
    isOwned: 0,
  },
  {
    image: supra,
    name: "Supra",
    description: "Toyota Supra Mark 4",
    price: "forBid",
    isOwned: 0,
  },
  {
    image: r35,
    name: "Nissan",
    description: "Nissan GTR 35",
    price: "forBid",
    isOwned: 0,
  },
  {
    image: corolla,
    name: "Toyota",
    description: "Toyota Corolla 1997",
    price: "forBid",
    isOwned: 0,
  },
  {
    image: mazda,
    name: "Mazda",
    description: "Mazda RX 7",
    price: "forBid",
    isOwned: 0,
  },
  {
    image: audi,
    name: "Audi",
    description: "Audi R8",
    price: "forBid",
    isOwned: 0,
  },
  {
    image: lambo,
    name: "Lamborghini",
    description: "Lamborghini Centenario",
    price: "forBid",
    isOwned: 0,
  },
];

const Explore = () => {
  return (
    <div className="marketplace px-5 text-orange-400 bg-gray-900 pb-10">
      <nav className="flex">
        <div className="w-1/2 flex justify-around items-center">
          <Link to="/" className="flex items-center text-xl font-bold">
            <img src={logo} alt="drivechain" /> DriveChain
          </Link>
          <input
            type="text"
            className="bg-gray-900 text-gray-200 border border-gray-400 px-4 py-2 rounded-lg w-80"
            placeholder="search for collectibles"
          />
          <div>
            <Link to="/explore" className="mx-2 text-lg font-bold">
              Explore
            </Link>
            <Link to="/marketplace" className="mx-2 text-lg font-bold">
              My NFTs
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center mr-10">
          <button className="mx-5 text-lg font-bold">Login</button>
          <FaRegUserCircle size={35} className="text-white"></FaRegUserCircle>
        </div>
      </nav>
      <div>
        <h3 className="text-2xl mx-10 mt-5 mb-10 font-bold">Not Owned</h3>
        <div className="grid grid-cols-5 gap-y-5 mx-10">
          {cars.map((car, idx) => (
            <NFTCard key={idx} info={car}></NFTCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
