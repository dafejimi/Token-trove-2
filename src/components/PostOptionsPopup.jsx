import React from 'react'
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

const PostOptionsPopup = () => {
  return (

    <Popover size="large">
      <PopoverTrigger >
        <Button bg="white" fontWeight="semibold">Setup Alias</Button>
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
    
  )
}

export default PostOptionsPopup