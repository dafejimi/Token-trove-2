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

const PostPopup = ({contentTitle, studioName, contentURI}) => {
  return (
    <div>
        <Popover>
            <PopoverTrigger>
                <Button>Trigger</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent style={{width: "1200px"}}>
                    <PopoverArrow />
                    <PopoverHeader>{contentTitle}</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <div className="w-[1200px] h-[767px] justify-start items-start gap-3.5 inline-flex">
                            <div className="pl-[35px] flex-col justify-start items-start gap-[18px] inline-flex">
                                <img className="w-[839px] h-[467px] rounded-[15px]" src={`https://cyan-rapid-possum-671.mypinata.cloud/ipfs/${contentURI}`} />
                                <div className="w-[839px] justify-between items-center inline-flex">
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
                                    <div className="justify-center items-center gap-2.5 flex">
                                        <div className="w-[45px] h-[45px] bg-sky-600 rounded-full" />
                                        <div className="w-[22px] h-[22px] relative" />
                                    </div>
                                
                                </div>
                                <div className="h-[84px] p-3 bg-zinc-100 bg-opacity-80 rounded-xl flex-col justify-start items-start flex">
                                    <div className="self-stretch h-[60px]" />
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
                            <div className="w-[312px] self-stretch bg-white flex-col justify-start items-start gap-[17px] inline-flex">
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
  )
}

export default PostPopup