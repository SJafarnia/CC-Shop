import { setTypeArray } from "types";
import ListGrid from "./list/ListGrid";
import SearchBar from "@/components/layout/modules/SearchBar";


export default async function SearchResult({ data, q }: { data: setTypeArray, q: string }) {


    if (!data || data == null || !data.length) {
        return (
            <div className="py-20">
                <div className="">
                    <h3 className="t text-4xl text-center mb-12">
                        No results were found!
                    </h3>
                </div>
                <div className="w w-2/3 mx-auto mb-5">
                    <SearchBar />
                </div>
                <ListGrid />
            </div>
        )
    }
    return (
        <div className="py-20">
            <div className="">
                <h3 className="t text-4xl text-center mb-12">
                    {`Search Results for "${q}"`}
                </h3>
            </div>
            <div className="w w-2/3 mx-auto mb-5">
                <SearchBar />
            </div>
            <ListGrid data={data} />
        </div>
    )
}

