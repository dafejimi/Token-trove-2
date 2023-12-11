import React, {useState, useEffect} from 'react'
import { useMoralis, useWeb3Contract } from "react-moralis";

const CreatorDetails = ({alias, setAlias, avatarUri, setAvatarURI, isAlias, setIsAlias, goToNext }) => {
  const { runContractFunction } = useWeb3Contract()
  const { isWeb3Enabled, account, chainId} = useMoralis()
  const [file, setFile] = useState(null)

  const uploadToPinata = () => {

  }

  const handleAlias = (e) => {
    setAlias(e.target.value)
  }

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => {
    
  }
  , [account])


  return (
    <div>
      <div>
        <div className="justify-between items-center self-stretch flex gap-5 mt-4 px-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="stroke-[2px] self-stretch flex w-3 shrink-0 h-3 flex-col rounded-[50%]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fcb901a-1e5f-45a4-81a3-3c822bac0d2c?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="aspect-[146] object-contain object-center w-[146px] stroke-[1px] stroke-sky-600 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="stroke-[1px] self-stretch flex w-3 shrink-0 h-3 flex-col rounded-[50%]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46f3588f-8f1c-41df-8c1b-11929a21cdc7?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="aspect-[146] object-contain object-center w-[146px] stroke-[1px] stroke-black stroke-opacity-20 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="stroke-[1px] self-stretch flex w-3 shrink-0 h-3 flex-col rounded-[50%]" />
          </div>
          
          <div className="text-black text-3xl font-medium leading-10 whitespace-nowrap mt-7 max-md:max-w-full">
          Creator Details
        </div>
        <div>
          {
            isAlias ? (
              <form>
                <div className=" leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10">
                  <label className="text-black text-base leading-6 mt-10 mb-4 max-md:max-w-full max-md:mt-10 font-medium">Alias</label>
                  <input typeof="text" disabled value={alias} name="alias" className="mt-3 bg-gray-50 rounded-[12px] border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className=" leading-6 mt-10 mb-8 max-md:max-w-full max-md:mt-10">
                  <label className="text-black text-base leading-6 mt-10  max-md:max-w-full max-md:mt-10 font-medium">Upload Avatar</label>
                  <input type="text" name="avatar" disabled value={avatarUri} className="m-2 ml-0 w-[450px] text-lg text-gray-900 border border-gray-300 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" required onChange={handleFile}/>  
                </div>
                <button className="align-center">
                  <div className="text-white text-2xl font-bold leading-9 whitespace-nowrap justify-center items-center bg-sky-600 object-center w-[600px] max-w-full mt-12 mb-7 px-5 py-3 max-md:mt-10" onClick={goToNext}>Next</div>
                </button>
            </form>
            ) : (
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
              <button onClick={goToNext} className="align-center">
                <div className="text-white text-2xl font-bold leading-9 whitespace-nowrap justify-center items-center bg-sky-600 object-center w-[600px] max-w-full mt-12 mb-7 px-5 py-3 max-md:mt-10" >Next</div>
              </button>
            </form>
            )
          }
        </div>
      </div>
      
    </div>
  )
}

export default CreatorDetails