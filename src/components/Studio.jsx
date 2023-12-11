import React, {useState, useEffect } from 'react'
import { useMoralis } from "react-moralis";
import Navbar from './Navbar';
import { EvmChain } from "@moralisweb3/common-evm-utils"
import * as web3 from "web3";
import * as moralis from "moralis";
import { ethers } from "ethers";
import PostPopup from './PostPopup';
import PostOptionsPopup from './PostOptionsPopup';

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

const Studio = ({studioAddress, studioChain, studioName, studioDescriptiveText}) => {
  const { account, enableWeb3, isWeb3Enabled, chainId} = useMoralis()
  const [postDetails, setPostDetails] = useState([])
  const [isError, setIsError] = useState(false)
  const [pageStatus, setPageStatus] = useState(false)

  const postEvent = {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "id",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "contentType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "contentURI",
        "type": "string"
      }
    ],
    "name": "PostEvent",
    "type": "event"
  }

  const indexStudioEvent = async () => {
    const signature = web3.eth.abi.encodeEventSignature({
      name: postEvent.name,
      type: postEvent.type,
      inputs: postEvent.inputs,
    })
  
    if (!moralis.default.Core.isStarted) {
      await moralis?.default.start({
        apiKey: process.env.MORALIS_API_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImY2MWZiNDI0LTJiMTQtNDA4Mi1hYTFhLWY1YTk3MDY5M2M3MCIsIm9yZ0lkIjoiMzY3NjQ4IiwidXNlcklkIjoiMzc3ODQ4IiwidHlwZUlkIjoiOGNkYWI4ZGItOWY3OC00NTRhLWFlZTItNzVjZTExOTQ2MzJkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDIyMjE0NDEsImV4cCI6NDg1Nzk4MTQ0MX0.RY36XgELOpobK0bTzGYKsMUn6MBaomZqVJFuBjBocPo",
        // ...and any other configuration
      });
    }
  
    const address = ethers?.getAddress(studioAddress)
    
    try {
      const response = await moralis?.default.EvmApi?.events?.getContractEvents({
        chain: EvmChain.SEPOLIA,
        address: address,
        abi: postEvent,
        topic: signature
      })
      if (!response) {
        setIsError(true)
      }

      setPostDetails(response.toJSON().result)

    } catch(error) {
      setIsError(error)
    }
  }

  const optionsPopup = () => {
    return (
      <div>
        <PostOptionsPopup />
      </div>
    )
    
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      console.log(`${studioAddress}, ${studioChain}, ${studioName}, ${studioDescriptiveText}`)
      if (chainId === studioChain ){
        setPageStatus(true)
        indexStudioEvent()
        .then(
          console.log(postDetails)
        )
        console.log(isError)
      }
  
    } else {
      enableWeb3()
    }
  }, [isWeb3Enabled, isError, account, chainId])


  return (
    <div>
      <Navbar />
      <div className="bg-slate-800 flex flex-col pl-14 pr-14 max-md:px-5">
        <div className="items-stretch self-stretch flex w-full justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="self-center flex items-stretch gap-4 my-auto">
            
          </div>
          <div className="items-stretch border-[color:var(--Purple,rgba(98,98,217,0.85))] bg-zinc-300 flex justify-between gap-5 pl-14 pr-14 py-6 rounded-xl border-[0.5px] border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="justify-between flex gap-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05fcfd75-3b1e-4f09-bb03-d78841f226d7?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-[27px] fill-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-600 text-opacity-80 text-center text-xl leading-8 self-stretch grow whitespace-nowrap">
                Search...
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb35dff-2df9-4f14-b075-dfd65a1f5fca?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="justify-center  self-center flex flex-col my-auto px-4 py-2 rounded-2xl border-solid">
            
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fcd19ed-9616-46ae-9fa3-19e17b32690e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="aspect-[5.19] object-contain object-center w-[2000px] items-start overflow-hidden self-center max-w-[1075px] mt-16 max-md:max-w-full max-md:mt-10"
        />
        <div className="self-center z-[1] w-full max-w-[1075px] mt-8 pb-4 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cyan-rapid-possum-671.mypinata.cloud/ipfs/QmRdu8UPDyTBekx1rPF8LUorzQdpTwUGiqVbND46c1KBJC"
                className="aspect-square object-contain object-center w-[180px] overflow-hidden shrink-0 max-w-full rounded-[50%] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col max-md:max-w-full max-md:mt-7">
                <div className="self-stretch text-white text-4xl font-medium leading-10 max-md:max-w-full">
                {studioName}
                </div>
                <div className="text-white text-base font-semibold leading-6 tracking-tighter self-stretch whitespace-nowrap mt-3 max-md:max-w-full">
                  
                </div>
                <div className="self-stretch text-white text-lg leading-7 mt-3 max-md:max-w-full">
                  {"This studio offers content that cut accross all sports, jump in and let's engage."}
                </div>
                <div className="justify-center items-center bg-white flex w-[120px] max-w-full flex-col mt-3 px-5 py-3 rounded-xl self-start">
                  <div className="text-base leading-6 bg-clip-text bg-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] whitespace-nowrap">
                  <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-start self-center flex mt-0 w-[422px] max-w-full justify-between gap-4 max-md:flex-wrap max-md:justify-center">
          <div className="text-white text-base leading-6 whitespace-nowrap justify-center border border-[color:var(--White,#FFF)] self-stretch grow px-4 py-2 border-solid">
            Home
          </div>
          <div className="text-white text-base leading-6 self-center my-auto">
            Videos
          </div>
          <div className="text-white text-base leading-6 self-center my-auto">
            Images
          </div>
          <div className="text-white text-base leading-6 self-center my-auto">
            NFT’S
          </div>
          <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
            Documents
          </div>
        </div>
        <div className="justify-between items-stretch self-stretch flex gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-lg leading-7 grow shrink basis-auto max-md:max-w-full">
            Images
          </div>
          <div className="text-white text-base leading-6 whitespace-nowrap self-start">
            View all
          </div>
        </div>
        <div className="self-stretch mt-11 pr-3 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch border border-[color:var(--White,#FFF)] flex w-full grow flex-col mx-auto pb-6 border-solid max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet={"https://cyan-rapid-possum-671.mypinata.cloud/ipfs/QmPeHz6pHvJXU6w9tcMmNkDh2qp5w8RXprSGyKa77jpaAU"}
                  className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
                />
                <div className="justify-end items-stretch self-center flex w-[368px] max-w-full gap-4 mt-6">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div >
                    
                    <Popover>
                      <PopoverTrigger>
                        <Button bg="dark"><div className="text-xl text-white font-bold leading-7">{postDetails[0]?.data?.title || "Icons we Love."}</div></Button>
                      </PopoverTrigger>
                      <Portal style={{padding:"25", height:"700px"}}>
                          <PopoverContent style={{width: "1200px"}} >
                              <PopoverArrow />
                              
                              <PopoverCloseButton />
                              <PopoverBody>
                                <div className="justify-start items-start gap-3.5 inline-flex">
                                    <div className="pl-[35px] flex-col justify-start items-start gap-[18px] inline-flex">
                                        <img className="w-[800px] h-[467px] rounded-[15px]" src="https://cyan-rapid-possum-671.mypinata.cloud/ipfs/QmPeHz6pHvJXU6w9tcMmNkDh2qp5w8RXprSGyKa77jpaAU" />
                                        <div className="w-[800px] justify-between items-center inline-flex">
                                            <div className="justify-start items-start gap-[15px] flex">
                                                <div className="rounded-[20px] justify-center items-start flex">
                                                    <img className="w-10 h-10 relative" src={"https://via.placeholder.com/40x40"} />
                                                </div>
                                                <div className="pt-[1.34px] pb-[1.33px] flex-col justify-center items-start gap-[0px] inline-flex">
                                                    <div className="text-stone-950 text-base font-medium font-['Roboto'] leading-snug">{studioName}</div>
                                                    <div className="text-zinc-600 text-xs font-normal font-['Roboto'] leading-[18px]"></div>
                                                </div>
                                            </div>
                                            <div className="justify-end items-center gap-[17px] flex">
                                                <div className="h-[45px] px-5 py-2 bg-sky-600 rounded-[15px] flex-col justify-center items-center inline-flex">
                                                    <div className="justify-center items-center gap-[5px] inline-flex">
                                                        <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Share</div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="h-10 flex-col justify-end items-start gap-2.5 flex">
                                            <div className="h-10 pr-4 flex-col justify-start items-start flex">
                                                <div className="self-stretch h-10 justify-start items-start inline-flex">
                                                    <div className="w-14 h-10 pr-4 flex-col justify-start items-start inline-flex">
                                                        <div className="self-stretch h-10 rounded-[20px] flex-col justify-start items-center flex">
                                                            <img className="w-10 h-10 relative" src="https://via.placeholder.com/40x40" />
                                                        </div>
                                                    </div>
                                                    <div className="h-[25.33px] pr-[635px] pb-1.5 border-b border-black border-opacity-10 justify-start items-center flex">
                                                        <div className="text-zinc-600 text-sm font-normal font-['Roboto'] leading-tight">Add a comment...</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[300px] self-stretch bg-white flex-col justify-start items-start gap-[17px] inline-flex">
                                        <div className="w-[312px] pr-[30px] pb-2.5 bg-white border-b border-sky-50 justify-between items-start inline-flex">
                                            <div className="text-stone-950 text-xl font-bold font-['Roboto'] leading-7">Comments</div>
                                            <div className="w-6 h-7 relative" />
                                        </div>
                                        <div className="flex-col justify-center items-start gap-4 flex">
                                    
                                        </div>
                                    </div>
                                </div>
                              </PopoverBody>
                            <PopoverFooter></PopoverFooter>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </div>
                    
                  </div>
                  <div>
                    <Popover>
                      <PopoverTrigger >
                        <Button bg="dark" fontWeight="semibold">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/430069a6-e093-40e2-a3b6-01cfa6f71e74?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                            className=" aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
                          />
                       </Button>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent style={{width: "250px"}} >
                          <PopoverArrow />
                          <PopoverHeader></PopoverHeader>
                          <PopoverCloseButton />
                          <PopoverBody  >
                            <div className="justify-end items-stretch shadow-sm bg-white flex flex-col py-2.5 rounded-xl">
                                <div className="border-t-[color:var(--black-alpha-200,rgba(0,0,0,0.08))] border-b-[color:var(--black-alpha-200,rgba(0,0,0,0.08))] flex gap-3.5 px-3.5 py-2 border-t border-solid border-b items-start">
                                    <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c99c963347d6e5e199bfbf655cf9f7bccde8d1faa6f3bb6912ab97b0e677676?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                                    className="aspect-[1.05] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="text-black text-sm leading-5 self-stretch">
                                    Mint as NFT
                                    </div>
                                </div>
                                <div className="items-center border-b-[color:var(--black-alpha-200,rgba(0,0,0,0.08))] flex justify-between gap-3.5 pl-3 pr-20 py-2 border-b border-solid">
                                    <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d05c34ee965fb5a40cfe15271c894785182ed34fe0b859ddf56ec16608cfd01?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                                    className="aspect-[2] object-contain object-center w-5 fill-sky-950 fill-opacity-80 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="text-black text-sm leading-5 self-stretch grow whitespace-nowrap">
                                    Bookmark
                                    </div>
                                </div>
                                <div className="border-b-[color:var(--black-alpha-200,rgba(0,0,0,0.08))] flex w-full justify-between gap-3.5 pl-3 pr-20 py-2 border-b border-solid items-start">
                                    <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/626f7d7d01574bae051149cbf77a1a3f912313c433e00e26a122fdf8d245a28e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                                    className="aspect-[1.11] object-contain object-center w-full fill-sky-950 fill-opacity-80 overflow-hidden shrink-0 flex-1"
                                    />
                                    <div className="text-black text-sm leading-5 self-stretch grow whitespace-nowrap">
                                    Share
                                    </div>
                                </div>
                            </div>
                          </PopoverBody>
                          <PopoverFooter></PopoverFooter>
                        </PopoverContent>
                      </Portal>
                    </Popover> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[35px]'/>
      </div>
    </div>
  )
}

export default Studio