"use client"
import { useState, useEffect } from "react"
import { Fragment } from "react"
import { setType } from "types";
import Paginator from "@modules/Sets/allSets/pagination/Paginator";
import { useDispatch } from "react-redux";
import { setLoadingState } from "@redux/features/SearchLoadingSlice";
import Card from "@modules/Sets/allSets/list/Card"

export default function ListGrid({ data }: any) {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(() => {
        const f = () => {
            dispatch(setLoadingState(false))
        }
        if (data) f()
    }, [data])

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    let postsToShow = data.slice(currentPage * pageSize - pageSize, currentPage * pageSize)

    if (data.length == pageSize) postsToShow = data

    return (
        <>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {postsToShow?.map((item: setType) => {
                    return (
                        <Fragment key={item.id}>
                            <Card
                                src={item.HeroImg[0].link}
                                alt={`${item.hero} ${item.title} ${item.category?.title}`}
                                hero={item.hero}
                                title={item.title}
                                setName={`${item.title} - ${item.category?.title}`}
                                price={item.price}
                            />
                        </Fragment>
                    )
                })}
            </div>
            {data.length == true &&
                <Paginator items={data.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
            }
        </>
    )
}

