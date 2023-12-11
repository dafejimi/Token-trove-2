import React from 'react'
import tokenTrovesvg from "../assets/svg/Tokentrove.svg"
import { ConnectButton } from "@web3uikit/web3";

const Navbar = () => {
  return (
    <div className="justify-center items-center border-b-[color:var(--White,#FFF)] bg-sky-600 bg-opacity-80 self-stretch flex w-full flex-col px-5 py-4 border-b border-solid max-md:max-w-full">
        <div className="justify-between items-stretch flex w-full max-w-[1312px] gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-between items-stretch flex gap-5">
            <img
              loading="lazy"
              src={tokenTrovesvg}
              className="aspect-[1.19] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-xl font-extrabold leading-5 self-center grow whitespace-nowrap my-auto">
              <a href='/'>TokenTrove</a>
            </div>
          </div>
          <div className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-white text-base font-bold leading-6 px-8">
                <a href='/'>Explore</a>
              </div>
              <div className="text-white text-base font-bold leading-6 px-8">
                <a href='/my-studio'>My Studio</a>
              </div>
              <div className="text-white text-base font-bold leading-6 whitespace-nowrap px-8">
                <a href='/user-page'>User Page</a>
              </div>
            </div>
            <div>
              <ConnectButton />
            </div>
          </div>
        </div>
    </div>
    
    
  )
}

export default Navbar