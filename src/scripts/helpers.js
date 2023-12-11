const { ethers } = require("ethers")
const web3 = require("web3")
//const FormData = require('form-data')
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
require('dotenv').config()


const registerAddress = process.env.REGISTER_ADDRESS
const chain = EvmChain?.MUMBAI
const privateKey = process.env.PRIVATE_KEY || ""

export const event = {
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
const signature = web3.eth.abi.encodeEventSignature({
    name: event.name,
    type: event.type,
    inputs: event.inputs,
});

const eventAbi = event.inputs

export const jwtToken = process.env.PINATA_JWT_BEARER_TOKEN || ""
export const indexRegisterEvent = async () => {
    await Moralis?.start({
        apiKey: process.env.MORALIS_API_KEY,
        // ...and any other configuration
    });
    const response = await Moralis?.EvmApi?.events?.getContractEvents({
        registerAddress,
        chain,
        signature,
        eventAbi,
    });
    return response?.toJSON().result
}

export const indexStudioEvent = async (address, chain, signature, abi) => {
    try {
      await Moralis?.start({
        apiKey: process.env.MORALIS_API_KEY,
        // ...and any other configuration
      });}
    catch (error) {console.log(error)}
    
    try {
      const response = await Moralis?.EvmApi?.events?.getContractEvents({
        address,
        chain,
        signature,
        abi,
      });
      return response?.toJSON()
    } catch (error) {console.log(error)}
    
}

export const deployTokenContract = async (wallet, abi, bytecode, args) => {
    const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet)
    try {
      const contract = await contractFactory.deploy(args[0],args[1])
      await contract.deploymentTransaction().wait()
      const contractAddress = contract.getAddress()

      return contractAddress
    } catch (error) {
      console.log(error)
    }
    
}
export const deployStudioContract = async (wallet, abi, bytecode, args) => {
  const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet)
  try {
    const contract = await contractFactory.deploy(args[0],args[1])
    await contract.deploymentTransaction().wait()
    const contractAddress = contract.getAddress()
    console.log(contract.deploymentTransaction().hash)
    return contractAddress
  } catch (error) {
    console.log(error)
  }
  
}
export const sepoliaConfig = {
    networkID: "11155111",
    networkRPC: "https://sepolia.infura.io/v3/",
    routerAddress: "0xd0daae2231e9cb96b94c8512223533293c3693bf"
}

export const polygonConfig = {
  networkID: "80001",
  networkRPC: "https://rpc-mumbai.maticvigil.com",
  routerAddress: "0x70499c328e1e2a3c41108bd3730f6670a44595d1"
}

export const optimismGoerliConfig = {
    networkID: "420",
    networkRPC: "https://endpoints.omniatech.io/v1/op/goerli/public" ,
    routerAddress: "0xeb52e9ae4a9fb37172978642d4c141ef53876f26"
}

export const fujiConfig = {
  networkID: "43113",
  networkRPC: "https://api.avax-test.network/ext/bc/C/rpc",
  routerAddress: "0x554472a2720e5e7d5d3c817529aba05eed5f82d8"
}

