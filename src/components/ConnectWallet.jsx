function ConnectWallet({ currentAccount, connectWallet, isOwner }) {
  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex justify-center py-12 items-center space-x-4">
      {!currentAccount ? (
        <button
          onClick={connectWallet}
          className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition cursor-pointer"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center space-x-2">
          {isOwner && (
            <span className="bg-green-500 text-white py-1 px-3 rounded-full text-xs">
              Owner
            </span>
          )}
          <span className="text-white text-sm">
            {shortenAddress(currentAccount)}
          </span>
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
