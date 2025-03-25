/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConnectWallet from "./components/ConnectWallet";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./Constants";
import { useAppContext } from "./ContextApi";

function App() {
  const {
    currentAccount,
    setCurrentAccount,
    contract,
    setContract,
    isOwner,
    setIsOwner,
  } = useAppContext();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please install metamask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);

      await initializeContract();
    } catch (error) {
      console.error("Error connecting wallet", error);
    }
  };

  const initializeContract = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.error(
          "Ethereum object not found. Install MetaMask or another wallet."
        );
        return;
      }

      const provider = new ethers.BrowserProvider(ethereum); // For ethers.js v6
      const signer = await provider.getSigner();

      // Creating the contract instance
      const portfolioContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      setContract(portfolioContract);

      // Fetching owner information
      const owner = await portfolioContract.owner(); // Call the owner function
      const signerAddress = await signer.getAddress();
      console.log("Signer Address: ", signerAddress);
      console.log("Owner Address: ", owner);

      // Checking if the signer is the owner
      setIsOwner(owner.toLowerCase() === signerAddress.toLowerCase());
    } catch (error) {
      console.error("Error while initializing the contract: ", error);
    }
  };

  const supportOwner = async (amount) => {
    try {
      if (!contract) return;
      const amountInWei = ethers.parseEther(amount.toString()); //wei 1/.5 ether
      console.log(`Sending ${amount} Eth to contract owner..`);

      const tx = await contract.supportMe({ value: amountInWei });
      console.log("Transaction hash: ", tx.hash);

      await tx.wait();
      console.log("Transaction is confirmed");

      alert("Thank you for your support");
    } catch (error) {
      console.error("Failed supporting owner: ", error);
      alert("Failed to send support: " + error.message);
    }
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log("Please install Metamask");
        }

        const accounts = await ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length !== 0) {
          setCurrentAccount(accounts[0]);
          await initializeContract();
        } else {
          console.log("Not authorized account found");
        }
      } catch (error) {
        console.error("Error checking wallet connection: ", error);
      }
    };

    checkWalletConnection();

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
          initializeContract();
        } else {
          setCurrentAccount("");
          setIsOwner(false);
        }
      });
    }
    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener("accountsChanged", () => {});
      }
    };
  }, []);

  console.log("aaaaaaa", currentAccount);

  return (
    <main className="bg-gray-700">
      {!currentAccount ? (
        <header className="bg-gray-800 py-4">
          <h1 className="text-white text-center">Blockchain Portfolio App</h1>
          <ConnectWallet
            currentAccount={currentAccount}
            connectWallet={connectWallet}
            isOwner={isOwner}
          />
        </header>
      ) : (
        <>
          <Header
            heroRef={heroRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            skillRef={skillRef}
            contactRef={contactRef}
          />

          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div className="" ref={skillRef}>
            <Skills />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
