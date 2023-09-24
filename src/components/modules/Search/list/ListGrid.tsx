"use client"
import { useState } from "react"
import Card from "./Card";
import { Fragment } from "react"
import { setType, setTypeArray } from "types";
import Paginator from "../pagination/Paginator";

export default function ListGrid({ data }: any) {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    let postsToShow = data.slice(currentPage * pageSize - pageSize, currentPage * pageSize)

    if (data.length == pageSize) postsToShow = data

    return (
        <>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {postsToShow.map((item: setType) => {
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

