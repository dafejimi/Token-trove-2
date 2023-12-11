import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { AliasPopup, Navbar } from "../components/index";
//import { Routes,Route } from "react-router-dom";
//import registerAbi from "../constants/register.json";
//import networkAddresses from "../constants/networkAddresses.json";
import { EvmChain } from "@moralisweb3/common-evm-utils"
import * as web3 from "web3";
import * as moralis from "moralis";
import { ethers } from "ethers";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  //PopoverAnchor,
  Portal,
  Button
} from '@chakra-ui/react'

const studioData = [
  {
    "alias": "Dafe",
    "studioName": "Dafe Sports",
    "descriptiveText": "Are you a diehard gamer, then join in on the fun with us e-sports is all we do.",
    "studioAddress": "0x2E4FE6AD683B62953f37F51A94c195D063CF60AD"
  },
  {
    "alias": "Dave",
    "studioName": "Dave's Gallery",
    "descriptiveText": "This studio offers exslusively available artworks by dave, world renowned artist.",
    "studioAddress": "0x7CB75Eff911960469668D96953bbdabF209A7111"
  },
  {
    "alias": "Zico",
    "studioName": "Zico loves Games",
    "descriptiveText": "This studio offers content that cut accross all sports, jump in and let's engage.",
    "studioAddress": "0x04DBE376110a08DbccCE4027534e33664A1FBe60"
  }
]

const registerAddress = process.env.REGISTER_ADDRESS || "0xc9B80C3189636825f8F752F68F1425C2a1619eE8"
const chain = EvmChain?.MUMBAI

const event = {
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "bytes32",
      "name": "studio_id",
      "type": "bytes32"
    },
    {
      "indexed": true,
      "internalType": "string",
      "name": "studioName",
      "type": "string"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "thumbnailURI",
      "type": "string"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "avatarURI",
      "type": "string"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "chain",
      "type": "string"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "descriptiveText",
      "type": "string"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "creatorAlias",
      "type": "string"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "creator",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "studioAddress",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "studioTokenAddress",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "address",
      "name": "nftAddress",
      "type": "address"
    }
  ],
  "name": "StudioEvent",
  "type": "event"
}


const Explore = ({isAlias, setIsAlias, alias, setAlias, avatarURI, setAvatarURI, setStudioName, setStudioChain, setStudioDescriptiveText, setStudioAddress}) => {
  const {chainId, isWeb3Enabled, enableWeb3, account} = useMoralis()
  const navigate = useNavigate()
  const [studioDetails, setStudioDetails] = useState([])
  const [pageStatus, setPageStatus] = useState(false)
  const [creatorAddress, setcreatorAddress] = useState(null)
  const [isError, setIsError] = useState(false)
  
  const indexRegisterEvent = async () => {
    const signature = web3.eth.abi.encodeEventSignature({
      name: event.name,
      type: event.type,
      inputs: event.inputs,
    })
  
    if (!moralis.default.Core.isStarted) {
      await moralis.default.start({
        apiKey: process.env.MORALIS_API_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImY2MWZiNDI0LTJiMTQtNDA4Mi1hYTFhLWY1YTk3MDY5M2M3MCIsIm9yZ0lkIjoiMzY3NjQ4IiwidXNlcklkIjoiMzc3ODQ4IiwidHlwZUlkIjoiOGNkYWI4ZGItOWY3OC00NTRhLWFlZTItNzVjZTExOTQ2MzJkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDIyMjE0NDEsImV4cCI6NDg1Nzk4MTQ0MX0.RY36XgELOpobK0bTzGYKsMUn6MBaomZqVJFuBjBocPo",
        // ...and any other configuration
      });
    }
    let response;
    const address = ethers.getAddress(registerAddress)
    try {
      response = await moralis.default.EvmApi?.events?.getContractEvents({
        chain: chain,
        address: address,
        abi: event,
        topic: signature
      })
      setStudioDetails(response.toJSON().result)
      if (!response) {
        setIsError(true)
      }
    } catch(error) {
      setIsError(true)
    }
    
  }
  const presets = (index) => {
    setStudioAddress(studioData[index].studioAddress)
    setStudioName(studioData[index]?.studioName)
    setStudioChain("Sepolia")
    setStudioDescriptiveText(studioData[index]?.descriptiveText)
  }

  const handleStudio1Click = () => {
    presets(0)
    setTimeout(() => {
      navigate(`/studio/${studioData[0]?.studioName}`)
    }, 1500);
    
  }

  const handleStudio2Click = () => {
    presets(1)
    setTimeout(() => {
      navigate(`/studio/${studioData[1]?.studioName}`)
    }, 3000);
    
  }

  const handleStudio3Click = () => {
    presets(2)
    setTimeout(() => {
      navigate(`/studio/${studioData[2]?.studioName}`)
    }, 3000);
    
  }

  
  useEffect(() => {
    if(isWeb3Enabled) {
      if (chainId === "0x13881") {
        setPageStatus(true)
        indexRegisterEvent()
        .then(
          console.log(studioDetails)
        )
        console.log(isError)
      }  
    } else {
      enableWeb3()
    }
  }, [isWeb3Enabled, isError, account, chainId])


  return(
    <div>
      <Navbar />
        <div className="bg-sky-950 bg-opacity-80 flex flex-col">
            <div className="flex-col justify-center items-center overflow-hidden self-stretch relative flex min-h-[718px] mt-0 w-full px-20 py-12 max-md:max-w-full max-md:px-5">
              <img
              loading="lazy"
              srcSet=""
              className="absolute h-full w-full object-cover object-center inset-0"
              />
              <div className="relative text-white text-center text-6xl font-medium leading-[67px] max-w-screen-md mt-48 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                  Create Your Studio
              </div>
              <div className="relative text-white text-center text-lg leading-7 max-w-screen-md mt-5 max-md:max-w-full">
                Are you a content creator looking for a space to thrive in the
                decentralized world of digital creativity? Look no further! TokenTrove
                invites you to create your very own studio and embark on a journey of
                endless possibilities.
              </div>
              <div className="relative justify-center items-center border border-[color:var(--Light-Grey,rgba(244,244,244,0.81))] shadow-lg bg-white flex w-[172px] max-w-full flex-col mt-5 mb-2 p-3 border-solid max-md:mb-10">
                <Popover size="large">
                  <PopoverTrigger >
                    <Button bg="white" fontWeight="semibold">Setup Alias</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent style={{width: "700px"}} >
                      <PopoverArrow />
                      <PopoverHeader></PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody  >
                        <AliasPopup />
                      </PopoverBody>
                      <PopoverFooter></PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover> 
              </div>
              <div onClick={()=> navigate("/create-studio")} className="relative justify-center items-center border border-[color:var(--Light-Grey,rgba(244,244,244,0.81))] shadow-lg bg-white flex w-[172px] max-w-full flex-col mt-5 mb-36 p-5 border-solid max-md:mb-10">
                <button className="text-base leading-6 bg-clip-text bg-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] whitespace-nowrap">
                  Deploy Studio
                </button>
              </div>
            </div>
            <div className="text-white text-center text-5xl font-medium leading-[58px] self-center max-w-screen-md mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                Explore
            </div>
            <div className="text-zinc-400 text-opacity-80 text-center text-lg leading-7 self-center max-w-screen-md mt-5 max-md:max-w-full">
              Discover endless creativity with TokenTrove's Explore feature.
            </div>{" "}
            <div className="justify-center items-center border-[color:var(--Purple,rgba(98,98,217,0.85))] h-[45px] bg-white self-center flex w-[868px] max-w-full flex-col mt-5 px-5 py-6 rounded-xl border-[0.5px] border-solid">
              <div className="items-stretch flex w-[772px] max-w-full justify-between gap-5 max-md:flex-wrap">
                <div className="flex justify-between gap-5 items-start">
                  <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e139f6d-6275-4ff5-ae1f-7b91475966a9?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="mt-2 aspect-[0.96] object-contain object-center w-[26px] fill-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <input type="text" placeholder="Search..." className="size-30 border-white-500 border focus:border-white-500 border-[color:var(--White,#FFF)] text-neutral-600 w-[650px] h-[45px] text-xl leading-8 self-stretch grow whitespace-nowrap" />
                  <div></div>
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/47336242-e7cd-4bea-a44a-54a2eaf8eec2?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>{" "}
            <div className="items-stretch self-center flex w-[244px] max-w-full gap-4 mt-5 px-5 max-md:justify-center">
              <div className="text-white text-base leading-6 self-center my-auto">
              Subscriptions
              </div>{" "}
              <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--White,#FFF)] aspect-[1.275] px-4 py-2 border-solid">
              All
              </div>{" "}
              <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              Trending
              </div>
            </div>{" "}
            <div>
              {
                pageStatus ? (
                  isError ? (
                    <div>
                      <div className="items-stretch self-stretch flex flex-col">
                        <div className="pt-10 text-white text-5xl font-medium leading-[58px] w-full max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                          <div className="text-center">Error Retrieving Studios</div>
                          <div className="text-center text-white text-xl leading-8 w-full mt-8 max-md:max-w-full">
                            Try:
                            <ul className="mt-3">
                            <li>Resetting your connection </li>
                            <li>Refreshing The Page</li>
                            </ul>
                          </div>
                          <div className="text-zinc-100 text-opacity-80 text-center text-lg leading-7 w-full mt-36 max-md:max-w-full max-md:mt-10">
                            To view this page you must be on the Mumbai Network
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                    <div className="ml-45 self-center w-full max-w-[1312px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
                      <div className="w-[100%] gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[110%] m-25 max-md:w-full max-md:ml-0">
                          <div className="items-stretch border border-[color:var(--White,#FFF)] flex w-full grow flex-col mx-auto pb-6 border-solid max-md:mt-8">
                            <img
                              loading="lazy"
                              srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studioDetails[0]?.data?.thumbnailURI}`}
                              className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                            />{" "}
                            <div className="self-center flex w-[368px] max-w-full gap-2.5 mt-6">
                              <img
                                loading="lazy"
                                srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studioDetails[0]?.data?.avatarURI}`}
                                className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                              />{" "}
                              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                <div className="text-white text-2xl font-bold leading-9">
                                  {studioData[0].alias}
                                </div>{" "}
                                <div className="text-white text-sm leading-5">
                                  {studioDetails[0]?.data?.descriptiveText}
                                </div>{" "}
                                <div className="text-white text-sm font-semibold leading-5">
                                  <button onClick={handleStudio1Click}>{studioData[0].studioName}</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[110%] m-25 max-md:w-full max-md:ml-0">
                          <div className="items-stretch border border-[color:var(--White,#FFF)] flex w-full grow flex-col mx-auto pb-6 border-solid max-md:mt-8">
                            <img
                              loading="lazy"
                              srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studioDetails[1]?.data?.thumbnailURI}`}
                              className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                            />{" "}
                            <div className="self-center flex w-[368px] max-w-full gap-2.5 mt-6">
                              <img
                                loading="lazy"
                                srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studioDetails[1]?.data?.avatarURI}`}
                                className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                              />{" "}
                                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                  <div className="text-white text-2xl font-bold leading-9">
                                    {studioData[1].alias}
                                  </div>{" "}
                                  <div className="text-white text-sm leading-5">
                                    {studioDetails[1]?.data?.descriptiveText}
                                  </div>{" "}
                                  <div className="text-white text-sm font-semibold leading-5">
                                    <button onClick={handleStudio2Click}>{studioData[1].studioName}</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="flex flex-col items-stretch w-[110%] m-25 max-md:w-full max-md:ml-0">
                            <div className="items-stretch border border-[color:var(--White,#FFF)] flex w-full grow flex-col mx-auto pb-6 border-solid max-md:mt-8">
                              <img
                                loading="lazy"
                                srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studioDetails[2]?.data?.thumbnailURI}`}
                                className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                              />{" "}
                              <div className="self-center flex w-[368px] max-w-full gap-2.5 mt-6">
                                <img
                                  loading="lazy"
                                  srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studioDetails[2]?.data?.avatarURI}`}
                                  className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                  <div className="text-white text-2xl font-bold leading-9">
                                    {studioData[2].alias}
                                </div>{" "}
                                <div className="text-white text-sm leading-5">
                                  {studioDetails[2]?.data?.descriptiveText}
                                </div>{" "}
                                <div className="text-white text-sm font-semibold leading-5">
                                  <button onClick={handleStudio3Click}>{studioData[2].studioName}</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="mt-10 mb-10"/>
                  </div>
                  )
                  
     
                ) : (
                  <div>           
                    <div className="items-stretch self-stretch flex flex-col">
                      <div className="pt-10 text-white text-5xl font-medium leading-[58px] w-full max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                        <div className="text-center">This page Is Unavailable</div>
                        <div className="text-center text-white text-xl leading-8 w-full mt-8 max-md:max-w-full">
                        Try:
                        <ul className="mt-3">
                        <li>Connecting Your Wallet </li>
                        <li>Switching to Mumbai Testnet</li>
                        </ul>
                      </div>
                      <div className="text-zinc-100 text-opacity-80 text-center text-lg leading-7 w-full mt-36 max-md:max-w-full max-md:mt-10">
                        To view this page you must be on the Mumbai Network
                      </div>
                    </div>  
                    
                  </div>
                </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Explore

/**<div className="self-center w-full max-w-[1312px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch border border-[color:var(--White,#FFF)] flex w-full grow flex-col mx-auto pb-6 border-solid max-md:mt-8">
                        <img
                            loading="lazy"
                            srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studiodetails[0].data.thumbnailURI}`}
                            className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                        />{" "}
                        <div className="self-center flex w-[368px] max-w-full gap-2.5 mt-6">
                            <img
                            loading="lazy"
                            srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studioDetails[0].data.avatarURI}`}
                            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div className="text-white text-2xl font-bold leading-9">
                                {studioData[0].alias}
                            </div>{" "}
                            <div className="text-white text-sm leading-5">
                                {studioDetails[0].data.descriptiveText}
                            </div>{" "}
                            <div className="text-white text-sm font-semibold leading-5">
                                {studioData[0].studioName}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch border border-[color:var(--White,#FFF)] flex w-full grow flex-col mx-auto pb-6 border-solid max-md:mt-8">
                        <img
                            loading="lazy"
                            srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studiodetails[1].data.thumbnailURI}`}
                            className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                        />{" "}
                        <div className="self-center flex w-[368px] max-w-full gap-2.5 mt-6">
                            <img
                            loading="lazy"
                            srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studiodetails[1].data.avatarURI}`}
                            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div className="text-white text-2xl font-bold leading-9">
                                {studioData[1].alias}
                            </div>{" "}
                            <div className="text-white text-sm leading-5">
                                {studioDetails[1].data.descriptiveText}
                            </div>{" "}
                            <div className="text-white text-sm font-semibold leading-5">
                                {studioData[1].studioName}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch border border-[color:var(--White,#FFF)] flex w-full grow flex-col mx-auto pb-6 border-solid max-md:mt-8">
                        <img
                            loading="lazy"
                            srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studiodetails[2].data.thumbnailURI}`}
                            className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                        />{" "}
                        <div className="self-center flex w-[368px] max-w-full gap-2.5 mt-6">
                            <img
                            loading="lazy"
                            srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studiodetails[0].data.avatarURI`}
                            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div className="text-white text-2xl font-bold leading-9">
                                {studioData[2].alias}
                            </div>{" "}
                            <div className="text-white text-sm leading-5">
                                {studioDetails[2].data.descriptiveText}
                            </div>{" "}
                            <div className="text-white text-sm font-semibold leading-5">
                                {studioData[2].studioName}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>{" "}
                </div>
      </div> 
      
      
      
      
      <div className="self-center w-full max-w-[1312px] mt-20 px-5 max-md:max-w-full max-md:mt-10 ">
                      <div className="grid grid-cols-3 gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        {studioDetails.map((studio,index) => (
                          <div>
                            <div className="items-stretch border border-[color:var(--White,#FFF)] flex flex-col pb-4 border-solid">
                          <img
                            loading="lazy"
                            srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studio.data.thumbnailURI}`}
                            className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                          />
                          <div className="items-stretch self-center flex gap-2.5 mt-4 px-5 py-0.5 max-md:justify-center">
                            <img
                              loading="lazy"
                              srcSet={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${studio.data.avatarURI}`}
                              className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
                            />
                            <div className="items-stretch flex grow basis-[0%] flex-col">
                              <div className="text-white text-2xl font-bold leading-9">
                                {aliases[index]}
                              </div>
                              <div className="text-white text-base font-semibold leading-6 tracking-tight whitespace-nowrap">
                                {studio.data.studioName}
                              </div>
                              <div className="text-zinc-100 text-opacity-80 text-sm leading-5">
                                {studio.data.descriptiveText}
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62c47dcbe2182908f54a7294d94b892a1164078b323f554754ec96872a1fe02?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                              className="aspect-[0.22] object-contain object-center w-1 fill-white fill-opacity-80 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
                            />
                          </div>
                        </div>
                          </div>
                        ))}
                      </div>
                    </div>*/