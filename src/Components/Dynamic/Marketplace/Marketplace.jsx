import logo from "../../../assets/drivechain_new.png";
import { FaRegUserCircle } from "react-icons/fa";
import NFTCard from "../NFTCard/NFTCard";
import { Link } from "react-router-dom";

const Marketplace = () => {
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
            <button className="mx-2 text-lg font-bold">Explore</button>
            <button className="mx-2 text-lg font-bold">My NFTs</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center mr-10">
          <button className="mx-5 text-lg font-bold">Login</button>
          <FaRegUserCircle size={35} className="text-white"></FaRegUserCircle>
        </div>
      </nav>
      <div>
        <h3 className="text-2xl mx-10 mt-5 mb-10 font-bold">Owned NFTs</h3>
        <div className="grid grid-cols-5 gap-y-5 mx-10">
          <NFTCard></NFTCard>
          <NFTCard></NFTCard>
          <NFTCard></NFTCard>
          <NFTCard></NFTCard>
          <NFTCard></NFTCard>
          <NFTCard></NFTCard>
          <NFTCard></NFTCard>
          <NFTCard></NFTCard>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
