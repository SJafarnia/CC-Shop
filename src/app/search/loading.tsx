"use client"
import { useEffect } from "react"
import { setLoadingState } from "@redux/features/SearchLoadingSlice";
import { useDispatch } from "react-redux";
import SetListLoading from "@/components/modules/loadings/SetListLoading";

function loading() {
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(setLoadingState(false))
    }, [])

    return (
        <div className="py-20">
            <div className="">
                <p className="text-4xl p-6 w-1/2 mx-auto bg-neutral-200 animate-pulse text-center mb-12"></p>
                <p className="text-4xl p-6 w-2/3 mx-auto bg-neutral-200 animate-pulse text-center mb-12"></p>
            </div>
            <div className="w w-2/3 mx-auto mb-5">
                <p className=""></p>
            </div>
            <SetListLoading />
        </div>
    )
}

export default loading