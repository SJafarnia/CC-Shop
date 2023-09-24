"use client"
import { useState } from 'react';
import SearchBar from './SearchBar';

function PopoverSearchBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        document.body.classList.toggle('overflow-hidden');
    };

    return (
        <>

            <button onClick={toggleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
            {
                isSearchOpen &&

                <div className="fixed top-0 right-0 bottom-0 left-0 w-full h-full z-50 bg-[#202020a6] shadow-lg">
                    <div className='x h-32 bg-white px-8 flex items-center'>
                        <div className='w w-11/12'>
                            <SearchBar popOver={toggleSearch} />
                        </div>

                        <button
                            className="text-gray-600 ml-4 hover:scale-110 ease-in-out duration-300 hover:text-gray-800 rounded-md hover:border hover:shadow-lg hover:bg-[202020a6] p-2 focus:outline-none"
                            onClick={toggleSearch}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                    </div>

                </div>
            }
        </>
    )
}

export default PopoverSearchBar