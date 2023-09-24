
type paginatorPropsType = {
    items: number,
    pageSize: number,
    currentPage: number,
    onPageChange: (page: number) => void
}

export default function Paginator({ items, pageSize, currentPage, onPageChange }: paginatorPropsType) {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    const prevAvailable = currentPage > 1
    const nextAvailable = currentPage < pages.length

    const prevHandler = () => {
        if (prevAvailable) onPageChange(currentPage - 1)
        return
    }

    const nextHandler = () => {
        if (nextAvailable) onPageChange(currentPage + 1)
        return
    }

    return (
        <nav aria-label="Page navigation example py-20">
            <ul className="list-style-none flex justify-center mt-20">
                <li onClick={prevHandler}>
                    <button className={`${prevAvailable ? "text-neutral-600 hover:bg-veryPeri hover:text-white " : "text-neutral-500 pointer-events-none "}mx-1 relative block rounded bg-transparent px-3 py-1.5 text-base transition-all duration-300`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </li>
                {pages.map((page) => (
                    <li>
                        <button
                            className="relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-veryPeri hover:text-white mx-1"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                            {page === currentPage && <span
                                className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                            >(current)</span>}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className={`${nextAvailable ? "text-neutral-600 hover:bg-veryPeri hover:text-white " : "text-neutral-500 pointer-events-none "} mx-1 relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300`}
                        onClick={nextHandler}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </li>
            </ul>
        </nav >
    )
}