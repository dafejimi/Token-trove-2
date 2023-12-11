import React, {useEffect, useState} from 'react'
import { CreateStudioStepper, CreatorDetails, TokenDetails, StudioDetails } from "./index";
import { useSteps } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";


const CreateStudio = ({studioAddress, setStudioAddress, isAlias, setIsAlias, alias, setAlias, avatarURI, setAvatarURI}) => {
  const {isWeb3Enabled} = useMoralis()
  const steps = [
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' },
  ]
  
  const { activeStep, goToNext, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <div className="items-stretch bg-white flex flex-col pb-12 px-16 max-md:px-5">
      <div className="justify-center mt-8 px-20 max-md:max-w-full max-md:px-5 flex gap-4 pr-20 pt-5 pb-2.5 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
            <div className="items-center bg-[linear-gradient(180deg,rgba(24,153,255,0.85)_0%,#1F249D_100%)] flex grow flex-col w-full mx-auto px-14 py-12 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="text-white text-left text-6xl font-medium leading-[67px] self-stretch whitespace-nowrap mt-32 max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                Create Studio
              </div>
              <div className="text-white text-lg leading-7 self-stretch mt-2.5">
                Welcome, Esteemed creator. consider this the first step in your
                journey of true autonomy as a creator. Here, you'll deploy the contracts 
                which drive your studio.
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a5941c2-b315-4750-91bc-9617e3c60cbd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-[1.33] object-contain object-center w-[317px] overflow-hidden max-w-full mb-24 max-md:mb-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0 w-full">
            <div className="shadow-2xl bg-white flex flex-col w-full mx-auto px-9 py-12 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="flex flex-col items-stretch w-[100%] ml-5 max-md:w-full max-md:ml-0 w-full item-center"> 
                < CreateStudioStepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
                {
                  <div>
                    <div>{activeStep === 1 && (<TokenDetails goToNext={goToNext}/>)}</div>
                    <div>{activeStep === 2 && (<CreatorDetails goToNext={goToNext} />)}</div>
                    <div>{activeStep === 3 && (<StudioDetails goToNext={goToNext}/>)}</div>
                  </div>
                }
              </div>
              
            </div>
          </div>
          
          
        </div>
      </div>
      <div className="text-black text-center text-base leading-6 whitespace-nowrap mt-14 mb-10 max-md:max-w-full max-md:my-10">
        © 2023 TokenTrove
      </div>
    </div>
  );
    
}

export default CreateStudio