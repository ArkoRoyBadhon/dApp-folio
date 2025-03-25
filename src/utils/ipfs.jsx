//hash, url to gateway url

export const getIpfsGatewayUrl = (ipfsUrl) => {
    if (!ipfsUrl) return "";
  
    if (ipfsUrl.startsWith("https://")) {
      return ipfsUrl;
    }
  
    if (ipfsUrl.startsWith("ipfs://")) {
      const hash = ipfsUrl.replace("ipfs://", "");
      return `https://gateway.pinata.cloud/ipfs/${hash}`;
    }
  
    return `https://gateway.pinata.cloud/ipfs/${ipfsUrl}`;
  };
  