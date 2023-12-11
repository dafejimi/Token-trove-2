import React from 'react'

const UploadPopup = () => {
    return (
        <div className="items-stretch shadow-sm bg-white flex flex-col py-10 rounded-[30px]">
          <div className="justify-center items-center bg-white flex flex-col px-5 max-md:max-w-full">
            <div className="justify-between items-stretch flex w-full max-w-[429px] gap-5 py-2.5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-xl font-medium leading-7">Upload</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8003290f-f4b6-49d9-836b-0a1cbd580530?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-6 self-center overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="justify-center items-stretch flex flex-col mt-2.5 px-12 max-md:max-w-full max-md:px-5">
            <div className="text-black text-base leading-6 max-md:max-w-full">
              Title
            </div>
            <div className="text-neutral-600 text-base leading-6 items-stretch border border-[color:var(--Black,#000)] bg-white justify-center mt-2 p-3 border-solid max-md:max-w-full">
              Beastly
            </div>
            <div className="text-black text-base leading-6 mt-6 max-md:max-w-full">
              Description
            </div>
            <div className="text-neutral-600 text-base leading-6 items-stretch border border-[color:var(--Black,#000)] bg-white justify-center mt-2 p-3 border-solid max-md:max-w-full">
              Remember to clearly communicate the purpose of each piece of
              information collected and assure users that their privacy and
              ownership rights will be respected.
            </div>
            <div className="text-black text-base leading-6 mt-6 max-md:max-w-full">
              Content Upload
            </div>
            <div className="items-stretch flex justify-between gap-4 mt-1.5 max-md:max-w-full max-md:flex-wrap">
              <div className="items-stretch border border-[color:var(--Black,#000)] bg-white flex justify-between gap-2 p-3 border-solid">
                <div className="text-neutral-600 text-base leading-6">
                  Upload Contents
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/547b7599-69ff-4b61-8359-38879c36b40a?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-[0.96] object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                />
              </div>
              <div className="justify-between items-stretch border border-[color:var(--Light-Grey,rgba(244,244,244,0.81))] bg-sky-600 flex gap-3 px-6 py-3 border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f99a5ef0-ff56-4261-bf30-821625fce859?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base leading-6">Upload</div>
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
              <div className="items-stretch border border-[color:var(--Black,#000)] bg-white flex justify-between gap-2 p-3 border-solid">
                <div className="text-neutral-600 text-base leading-6">
                  Picture.jpg
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa8eff7-d031-4eaa-88e9-e7d481a63efd?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-[0.96] object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                />
              </div>
              <div className="justify-between items-stretch border border-[color:var(--Light-Grey,rgba(244,244,244,0.81))] bg-sky-600 flex gap-3 px-6 py-3 border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b0597d-89f0-46da-a6f9-aaae3d91d101?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base leading-6">Image</div>
              </div>
            </div>
            <div className="text-black text-base leading-6 mt-6 max-md:max-w-full">
              Price (Creator Tokens)
            </div>
            <div className="items-stretch border border-[color:var(--Black,#000)] bg-white flex justify-between gap-2.5 mt-2 pl-3 border-solid max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-neutral-600 text-lg leading-7 self-center grow shrink basis-auto my-auto">
                40
              </div>
              <div className="text-base leading-6 bg-clip-text bg-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] self-center my-auto">
                BEC
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c7b9452-300c-4906-8538-8221a5928822?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-[0.5] object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="text-black text-base leading-6 mt-6 max-md:max-w-full">
              Set Thumbnail
            </div>
            <div className="items-stretch flex justify-between gap-4 mt-1.5 max-md:max-w-full max-md:flex-wrap">
              <div className="items-stretch border border-[color:var(--Black,#000)] bg-white flex justify-between gap-2 p-3 border-solid">
                <div className="text-neutral-600 text-base leading-6">
                  Thumbnail.jpg
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/25dc08c1-6824-4d32-b27d-6cc1d30a5f6f?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-[0.96] object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                />
              </div>
              <div className="justify-between items-stretch border border-[color:var(--Light-Grey,rgba(244,244,244,0.81))] bg-sky-600 flex gap-3 px-6 py-3 border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/20e1cd51-9fba-445b-bac0-c2cafc8b5700?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base leading-6">Upload</div>
              </div>
            </div>
            <div className="text-white text-2xl font-bold leading-9 justify-center items-center bg-sky-600 mt-6 px-5 py-3 max-md:max-w-full">
              Finish
            </div>
          </div>
        </div>
      );
    
}

export default UploadPopup
  

