import logo from "../../../assets/drivechain.png";
import { FaRegUserCircle } from "react-icons/fa";

const Marketplace = () => {
  return (
    <div className="marketplace px-5 text-orange-500">
      <nav className="flex">
        <div className="w-1/2 flex justify-around items-center">
          <div className="flex items-center text-xl font-bold">
            <img src={logo} alt="drivechain" /> DriveChain
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="search for collectibles"
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
          <div>
            <button className="mx-2 text-lg font-bold">Explore</button>
            <button className="mx-2 text-lg font-bold">My NFTs</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center mr-10">
          <button className="mx-5 text-lg font-bold">Login</button>
          <FaRegUserCircle size={30} className="text-black"></FaRegUserCircle>
        </div>
      </nav>
    </div>
  );
};

export default Marketplace;
