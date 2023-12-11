import React, {useEffect, useState} from 'react';
import { useMoralis } from "react-moralis";

const TokenDetails = ({goToNext}) => {
  const [name, setName] = useState(null)
  const [symbol, setSymbol] = useState(null)
  const [isDisabled, setIsDisabled] = useState(null)
  const {account, Moralis, authenticate, isAuthenticated, isWeb3Enabled, enableWeb3} = useMoralis()
  const [pageStatus, setPageStatus] = useState(null)
  const [selectedChain, setSelectedChain] = useState(null)


  useEffect(() => {
    if(isWeb3Enabled) {
      setPageStatus(true)
    } else {
      enableWeb3()
      
    }
    

  }, [account, isWeb3Enabled, enableWeb3])
  
  const handleSelectChange = (event) => {
    setSelectedChain(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleSymbol = (event) => {
    setSymbol(event.target.value)
  }

  
  return (
    <div className="flex flex-col"> 
        <div className="text-black text-3xl font-medium leading-10 whitespace-nowrap mt-7 self-start max-md:ml-2.5">
          Token Parameters
        </div>
        <form id='tokenForm'>
          <div className=" leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10">
              <label className="text-black text-base leading-6 mt-10  max-md:max-w-full max-md:mt-10 font-medium">Token Name</label>
              <input type="text" placeholder="" name="tokenName" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleName}/>
          </div>
          <div className=" leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10">
              <label className="text-black text-base leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10 font-medium">Token Symbol</label>
              <input type="text" placeholder="" name="tokenSymbol" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleSymbol}/>
          </div>
          <div className=" leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10">
              <label className="text-black text-base leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10 font-medium">Chain</label>
              <div >
                  <select className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleSelectChange}>
                      <option value="sepolia-testnet">Sepolia Testnet (Ethereum)</option>
                      <option value="polygon-testnet">Mumbai Testnet(Polygon)</option>
                      <option value="optimism-testnet">Optimism Testnet</option>
                      <option value="fuji-testnet">Fuji Testnet(Avalanche)</option>
                  </select>
              </div>
          </div>
          <button onClick={goToNext}className="align-center" disabled={isDisabled}>
              <div className="text-white text-2xl font-bold leading-9 whitespace-nowrap justify-center items-center bg-sky-600 object-center w-[600px] max-w-full mt-12 mb-7 px-5 py-3 max-md:mt-10">Next</div>
          </button>
        </form>  
    </div>

  )
}

export default TokenDetails