import { setTypeArray } from "types";
import ListGrid from "./list/ListGrid";

export default async function AllSetsList({ allSets }: { allSets: setTypeArray }) {

    return (
        <ListGrid data={allSets} />
    )
}

