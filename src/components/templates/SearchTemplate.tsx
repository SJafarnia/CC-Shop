import SearchResult from "../modules/Search/SearchResult"

export type qType = {
    q: string
}

function SearchTemplate({ q }: qType) {
    return (
        <SearchResult q={q} />
    )
}

export default SearchTemplate