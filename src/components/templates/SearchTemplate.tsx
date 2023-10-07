import { setTypeArray } from "types"
import SearchResult from "../modules/Search/SearchResult"


function SearchTemplate({ data, q }: { data: setTypeArray, q: string }) {
    return (
        <SearchResult data={data} q={q} />
    )
}

export default SearchTemplate