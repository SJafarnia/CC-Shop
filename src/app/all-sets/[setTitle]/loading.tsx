import React from 'react'

function Loading() {
    return (
        <>
            <div className='flex p-5 my-20'>
                <div className='imagesection w-1/2'>
                    <div className='h-full'>
                        <div className='w-full h-[435px] rounded-md animate-pulse bg-gray-200' />
                    </div>
                </div>
                <div className='infoSection w-1/2'>
                    <div className='mt-8 pl-10 flex justify-around flex-col h-full animate-pulse'>
                        <div>
                            <div className='header mb-3 pl-1 text-4xl py-3 bg-gray-200'></div>
                            <div className='header mb-3 pl-1 text-4xl py-3 bg-gray-200'></div>
                            <div className='header pl-1 text-4xl py-3 bg-gray-200 w-2/3 mb-10'></div>
                            <div className='price mb-6 w-1/6 bg-gray-200 py-4'></div>
                        </div>
                        <div className='mb-6 w-full bg-gray-200 rounded-sm py-4 flex flex-wrap'>
                        </div>
                        <div className='cats mb-4 flex items-center'>
                            <p className='p-1 font-medium py-4 bg-gray-200 w-16'></p>
                            <p className=' bg-gray-200 rounded-sm p-2 py-4 w-24  mx-1'></p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading