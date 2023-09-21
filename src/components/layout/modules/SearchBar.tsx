'use client'
import { ChangeEvent, useState } from "react"

export default function SearchBar() {
    const [q, setQ] = useState("")

    const searchHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (q && event.key === 'Enter') {
            // performSearch();
        }
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (q) {
            // performSearch();
        }
    }

    return (
        <div className="searchbtn relative w-full text-black">
            <input className="rounded py-2 pl-2 pr-8 outline-none w-full focus:outline-livingCoral" onKeyDown={searchHandler} placeholder="Looking For Something?" value={q} onChange={(e) => setQ(e.target.value)}></input>
            <button className="absolute right-1 text-veryPeri top-1 p-1 z-10 focus:outline-none" onClick={clickHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    )
}