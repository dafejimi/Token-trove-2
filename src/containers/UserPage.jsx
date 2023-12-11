import React from 'react'
import { Navbar } from '../components'

const UserPage = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-sky-950 bg-opacity-80 flex flex-col items-stretch pb-12">
          <div className="self-center w-full max-w-[1074px] mt-20 px-5 py-1 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4d43211d5c9a488524295952adc8e822226196646f850e7ff36de600e171c47?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-square object-contain object-center w-[163px] overflow-hidden shrink-0 max-w-full rounded-[50%] max-md:mt-8"
                />
              </div>
              <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
                <div className="self-stretch text-white text-4xl font-medium leading-10 my-auto max-md:max-w-full max-md:mt-10">
                  Tianababe
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center self-center flex w-full max-w-[1312px] flex-col mt-7 pb-5 px-16 max-md:max-w-full max-md:px-5">
            <div className="items-start flex justify-between gap-4 pl-4 max-md:justify-center">
              <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
                Studios
              </div>
              <div className="text-white text-base leading-6 self-center my-auto">
                Subscriptions
              </div>
              <div className="text-white text-base leading-6 self-center my-auto">
                NFT’s
              </div>
              <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--White,#FFF)] self-stretch grow px-4 py-2 border-solid">
                Bookmarks
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserPage