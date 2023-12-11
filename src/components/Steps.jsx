
import React, { useState } from 'react'
import { CreatorDetails, TokenDetails, StudioDetails } from "./index";

const Steps = ({studioAddress, setStudioAddress, activeStep, goToNext, isAlias, setIsAlias, alias, setAlias, avatarURI, setAvatarURI}) => {
  const [nftAddress, setNftAddress] = useState(null)
  const [tokenAddress, setTokenAddress] = useState(null)
  const [rpcURL, setRpcURL] = useState(null)
  const [privateKey, setPrivateKey] = useState(null)
  const [selectedChain, setSelectedChain] = useState(null);

  if (activeStep === 1) {
    return (
      <TokenDetails 
        setTokenAddress={setTokenAddress} 
        setNftAddress={setNftAddress} 
        goToNext={goToNext} 
        rpcURL={rpcURL} 
        setRpcURL={setRpcURL} 
        privateKey={privateKey} 
        setPrivateKey={setPrivateKey}
        selectedChain={selectedChain}
        setSelectedChain={setSelectedChain}
      />
    )
  }

  if (activeStep === 2) {
    return (
      <CreatorDetails 
        alias={alias} 
        setAlias={setAlias} 
        avatarURI={avatarURI} 
        setAvatarURI={setAvatarURI} 
        isAlias={isAlias}
        setIsAlias={setIsAlias}
        goToNext={goToNext}
      />
    )
  }

  if (activeStep === 3) {
    return (
      <StudioDetails 
        studioAddress={studioAddress} 
        setStudioAddress={setStudioAddress} 
        alias={alias} 
        avatarURI={avatarURI} 
        nftAddress={nftAddress} 
        tokenAddress={tokenAddress} 
        goToNext={goToNext} 
        rpcURL={rpcURL} 
        privateKey={privateKey} 
        setPrivateKey={setPrivateKey}
        selectedChain={selectedChain}
      />
    )
  }
}

export default Steps