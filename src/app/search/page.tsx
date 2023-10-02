import { deslugify } from "@utils/textModifer"
import { notFound } from 'next/navigation';
import SearchTemplate from '@/components/templates/SearchTemplate';


async function SearchPage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    if (searchParams == undefined || searchParams.q == null) return notFound()

    const { q } = searchParams
    const filteredQ: string = deslugify(q)

    return (
        <SearchTemplate q={filteredQ} />
    )
}

export default SearchPage