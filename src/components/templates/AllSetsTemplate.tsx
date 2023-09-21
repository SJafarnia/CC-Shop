import { selectAllPosts } from "@redux/features/allPostsSlice";
import AllSetsList from "../modules/Sets/allSets/AllSetsList";
import { useSelector } from 'react-redux';


export default function AllSetsTemplate() {
    // const data = useSelector(selectAllPosts);
    // console.log(data)
    return (
        <AllSetsList />
    )
}