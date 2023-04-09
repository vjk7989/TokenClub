import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="http://localhost:3001/store" target="_blank"><p className="text-white text-base text-center mx-2 cursor-pointer">Market</p></a>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Learn</p>
        <a href="https://goerli.etherscan.io/token/0x00fD156507052C7a9b010BB6B4972BA251745690?a=0xea4d812e126e05a58bcbe74fe04308f06c5b2d2e" target="_blank"><p className="text-white text-base text-center mx-2 cursor-pointer">Invest</p></a>

        
        
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
      
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">https://vitap.ac.in/</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@SCE</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
