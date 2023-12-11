import React, {useState, useEffect} from 'react'
import { useWeb3Contract, useMoralis } from "react-moralis";
import networkAddresses from "../constants/networkAddresses.json";
import { useNavigate } from 'react-router-dom';


const AliasPopup = ({}) => {
  const { runContractFunction } = useWeb3Contract()
  const { isWeb3Enabled, account, chainId} = useMoralis()

  const [file, setFile] = useState(null)
  const navigate = useNavigate()  

  const registerAddress = networkAddresses["80001"].Register;

  const handleClick = () => {
    navigate("/")
  }

  const uploadToPinata = () => {}
  const handleAlias = (e) => {
    setAlias(e.target.value)
  }
  
  const [alias, setAlias] = useState(null)
  // const [avatarURI, setAvatarURI] = useState(null)

  return (
    <div className="items-stretch shadow-sm bg-white flex flex-col py-10 rounded-[30px]">
      <div className="justify-center items-center bg-white flex flex-col px-5 max-md:max-w-full">
        <div className="justify-between items-stretch flex w-full max-w-[429px] gap-5 py-2.5 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-center text-black text-xl font-medium leading-7">
            Set your Alias
          </div>
        </div>
      </div>
      <div className="justify-center items-stretch flex flex-col mt-2.5 px-12 max-md:max-w-full max-md:px-5">
        <form>
          <div className=" leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10">
            <label className="text-black text-base leading-6 mt-10 mb-4 max-md:max-w-full max-md:mt-10 font-medium">Alias</label>
            <input typeof="text" name="alias" className="mt-3 bg-gray-50 rounded-[12px] border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleAlias}/>
          </div>
          <div className=" leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10">
            <label className="block text-black text-base leading-6 mt-10  max-md:max-w-full max-md:mt-10 font-medium">Upload Avatar</label>
            <div className="inline-flex">
              <input type="file" name="avatar" className="m-2 ml-0 w-[450px] text-lg text-gray-900 border border-gray-300 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" required/>
              <button onClick={uploadToPinata}>
                <div className="inline border border-[color:var(--black-alpha-700,rgba(0,0,0,0.64))] bg-sky-600 flex gap-3 px-6 py-3 border-solid max-md:px-5 w-[150px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/23234b35-c588-45f9-9af9-7b0d2d7ad26c?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                    className="object-contain object-center justify-center items-center"
                  />
                  <div className="text-white text-base leading-6 grow whitespace-nowrap">
                    Upload
                  </div>
                </div>
              </button>  
            </div> 
          </div>
          <button onClick={handleClick} className="align-center">
            <div className="text-white text-2xl font-bold leading-9 whitespace-nowrap justify-center items-center bg-sky-600 object-center w-[600px] max-w-full mt-12 mb-7 px-5 py-3 max-md:mt-10" >Next</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AliasPopup


