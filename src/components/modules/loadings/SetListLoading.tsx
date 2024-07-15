function SetListLoading() {
    return (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array(6).fill("").map((item, indx) => {
                return (
                    <div key={indx} className="mx-2 relative flex flex-col justify-between rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]sm:shrink-0 sm:grow sm:basis-0">
                        <div
                            className="rounded-md animate-pulse bg-gray-200  h-[352.55px] max-w-[317px]"
                        />
                        <div className="mb-4 px-10 py-6 text-center">
                            <p className='mb-4 pl-1 text-4xl py-3 w-1/3 mx-auto bg-gray-200'></p>
                            <p className='header mb-2 pl-1 text-4xl py-2 w-3/4 mx-auto bg-gray-200'></p>
                            <p className='header mb-6 pl-1 text-4xl py-2 w-1/3 mx-auto bg-gray-200'></p>
                            <p className='header pl-1 text-4xl w-1/3 py-3 mx-auto bg-gray-200'></p>
                        </div>
                        <p className='header mb-3 pl-1 text-4xl w-full py-5 bg-gray-200'></p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default SetListLoading