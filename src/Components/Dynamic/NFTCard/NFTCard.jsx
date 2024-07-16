/* eslint-disable react/prop-types */
const NFTCard = ({ info }) => {
  const { image, name, description, price } = info;

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
        <div className="text-green-500 flex items-center">
          <span className="dot bg-green-500 rounded-full h-2 w-2 mr-2"></span>{" "}
          Owned
        </div>
        <p className="font-bold">{price} ETH</p>
      </div>
    </div>
  );
};

export default NFTCard;
