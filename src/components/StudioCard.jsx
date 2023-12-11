import React, {useEffect, useState} from 'react'
import { useMoralis, useWeb3Contract } from "react-moralis";
import networkAddresses from "../constants/networkAddresses.json";
import registerAbi from "../constants/register.json";

const StudioCard = ({creatorAddress, studioName, descriptiveText}) => {
  const {runContractFunction} = useWeb3Contract()
  
  const [creatorAlias, setCreatorAlias] = useState(null)
  const [creatorAvatar, setCreatorAvatar] = useState(null)

  const registerAddress = networkAddresses["80001"].Register;

  async function getAlias() {
    const _alias = await runContractFunction({
      params: {
        abi: registerAbi,
        contractAddress: registerAddress,
        functionName: "getAddressedAlias",
        params: {
          account: creatorAddress,
        },
      },
      onError: (error) => console.log(error),
    })

    const _avatar = await runContractFunction({
      params: {
        abi: registerAbi,
        contractAddress: registerAddress,
        functionName: "getAddressedAvatar",
        params: {
          account: creatorAddress,
        },
      },
      onError: (error) => console.log(error),
    })

    if (_alias) {
      setCreatorAlias(_alias)
    }
    if (_avatar) {
      setCreatorAvatar(_avatar)
    }
  }
  
  useEffect(() => {
    getAlias()
  })

  return (
    <div>
      <div className="items-stretch border border-[color:var(--White,#FFF)] flex flex-col pb-4 border-solid">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9e0cf3ae1faf31d1c2598b87adc392e64a4ccffcb0296d31704df874eb1a46a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
          className="aspect-[1.39] object-contain object-center w-full overflow-hidden"
        />
        <div className="items-stretch self-center flex gap-2.5 mt-4 px-5 py-0.5 max-md:justify-center">
          <img
            loading="lazy"
            srcSet={creatorAvatar}
            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
          />
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-2xl font-bold leading-9">
              {creatorAlias}
            </div>
            <div className="text-white text-base font-semibold leading-6 tracking-tight whitespace-nowrap">
              {studioName}
            </div>
            <div className="text-zinc-100 text-opacity-80 text-sm leading-5">
              {descriptiveText}
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
  )
}

export default StudioCard