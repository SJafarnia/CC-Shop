'use client'
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { selectSearchLoadingSlice } from "@redux/features/SearchLoadingSlice";
import { setLoadingState } from "@redux/features/SearchLoadingSlice";


type popOverType = {
    popOver?: () => void
}


export default function SearchBar({ popOver }: popOverType) {
    const router = useRouter()
    const dispatch = useDispatch()
    const searchParams = useSearchParams();
    const urlParam = searchParams.get('q');
    const [q, setQ] = useState<string>(urlParam as string || "")
    const loadingState = useSelector(selectSearchLoadingSlice)

    useEffect(() => {
        if (urlParam && urlParam != q) setQ(urlParam)
    }, [urlParam])

    const searchHandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (q && event.key === 'Enter' && q !== urlParam) {
            // performSearch();
            if (popOver) {
                popOver()
            }
            dispatch(setLoadingState(true))
            router.push(`/search?q=${q}`)
        }
    }

    const clickHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (q && q !== urlParam) {
            // performSearch();
            if (popOver) {
                popOver()
            }
            dispatch(setLoadingState(true))
            router.push(`/search?q=${q}`)
        }
    }
    
    return (
        <div className="searchbtn relative w-full text-black">
            <input className="rounded py-4 pl-3 pr-8 outline-none w-full bg-[#f2ecff] hover:bg-[#d8c6ff]" autoFocus={popOver ? true : false} onKeyDown={searchHandler} placeholder="Looking For Something?" value={q} onChange={(e) => setQ(e.target.value)}></input>
            {loadingState ?
                <div
                    className="absolute right-2 text-veryPeri top-3 p-1 z-10 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-10 !w-10 !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >
                    </span>
                </div>
                :
                <button className="absolute right-2 animate-fadeOut text-veryPeri top-3 p-1 z-10 focus:outline-none hover:scale-125 ease-in-out duration-300" onClick={clickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            }
        </div>
    )
}