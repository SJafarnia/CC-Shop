import { setTypeArray } from "types";
import AllSetsList from "../modules/Sets/allSets/AllSetsList";

export default function AllSetsTemplate({ allSets }: { allSets: setTypeArray }) {
    return (
        <AllSetsList  allSets={allSets}/>
    )
}