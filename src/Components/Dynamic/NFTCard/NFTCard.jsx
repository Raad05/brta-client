/* eslint-disable react/prop-types */
const NFTCard = ({ info }) => {
  const { image, name, description, price, isOwned } = info;

  return (
    <div className="nft-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white w-80">
      <img className="w-full" src={image} alt="Summer is ON" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {name} NFT<span className="text-yellow-500">🌟</span>
        </div>

        <p className="text-base">{description}</p>
      </div>
      <div className="p-4 mx-4 mb-4 rounded-lg flex justify-between items-center bg-gray-700">
        {isOwned ? (
          <div className="text-green-500 flex items-center">
            <span className="dot bg-green-500 rounded-full h-2 w-2 mr-2"></span>
            Owned
          </div>
        ) : (
          <div className="text-red-500 flex items-center">
            <span className="dot bg-red-500 rounded-full h-2 w-2 mr-2"></span>
            Not Owned
          </div>
        )}
        {price === "forBid" ? (
          <button className="font-bold bg-orange-500 px-4 py-2 rounded">
            BID
          </button>
        ) : (
          <p className="font-bold">{price} BDT</p>
        )}
      </div>
    </div>
  );
};

export default NFTCard;
