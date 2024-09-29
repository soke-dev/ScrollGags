import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
    <div className="flex mf:flex-row flex-col items-start justify-between md:p-24 py-16 px-8">
      {/* Left Section */}
      <div className="flex flex-1 justify-start items-start flex-col mf:mr-16">
        <h1 className="text-4xl sm:text-7xl text-white text-gradient py-4">
          Bringing Humor & <br /> Memes to Scroll Transactions.
        </h1>
        <p className="text-left mt-8 text-gray-300 font-light md:w-8/12 w-full text-xl leading-relaxed">
          Laugh Your Way Through ETH Transfers with ScrollGags
        </p>
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <AiFillPlayCircle className="text-white mr-3" size={24} />
            <p className="text-white text-lg font-semibold">
              Connect Wallet
            </p>
          </button>
        )}
      </div>
  
      {/* Right Section */}
      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-16">
        {/* Ethereum Card */}
        <div className="p-6 flex justify-end items-start flex-col rounded-2xl h-56 sm:w-80 w-full eth-card white-glassmorphism shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105">
          <div className="flex justify-between flex-col w-full h-full">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center">
                <SiEthereum fontSize={28} color="#fff" />
              </div>
              <BsInfoCircle fontSize={20} color="#fff" />
            </div>
            <div className="mt-4">
              <p className="text-white font-light text-md">
                {shortenAddress(currentAccount)}
              </p>
              <p className="text-white font-semibold text-2xl mt-2">
                ScrollGags
              </p>
            </div>
          </div>
        </div>
  
        <div className="p-8 sm:w-[500px] w-full flex flex-col justify-start items-center blue-glassmorphism rounded-lg shadow-xl mt-12 space-y-6">
  <Input
    placeholder="Address To"
    name="addressTo"
    type="text"
    handleChange={handleChange}
    className="p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <Input
    placeholder="Amount (ETH)"
    name="amount"
    type="number"
    handleChange={handleChange}
    className="p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <Input
    placeholder="Keyword (Gif)"
    name="keyword"
    type="text"
    handleChange={handleChange}
    className="p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <Input
    placeholder="Enter Message"
    name="message"
    type="text"
    handleChange={handleChange}
    className="p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <div className="w-full border-t border-gray-600 my-6" />

  {isLoading
    ? <Loader />
    : (
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 border border-gray-700 hover:bg-indigo-800 rounded-full text-white text-lg font-medium transition-transform transform hover:scale-105"
      >
        Send Now
      </button>
    )}
</div>
      </div>
    </div>
  </div>
  
  
  );
};

export default Welcome;
