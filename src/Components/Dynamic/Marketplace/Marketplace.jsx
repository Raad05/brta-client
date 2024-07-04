import logo from "../../../assets/drivechain.png";

const Marketplace = () => {
  return (
    <div className="marketplace container mx-auto">
      <nav className="flex justify-between">
        <div className="w-1/2 flex justify-between items-center">
          <div className="flex items-center text-xl font-bold">
            <img src={logo} alt="drivechain" /> DriveChain
          </div>

          <div>Nav links</div>
        </div>
        <div className="w-1/2 flex justify-end">user info</div>
      </nav>
    </div>
  );
};

export default Marketplace;
