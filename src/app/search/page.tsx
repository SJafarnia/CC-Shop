import { deslugify } from "@utils/textModifer"
import { notFound } from 'next/navigation';
import SearchTemplate from '@/components/templates/SearchTemplate';
import { findSets } from "@utils/queries";

export const dynamic = "force-dynamic"

async function SearchPage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    if (searchParams == undefined || searchParams.q == null) return notFound()

    const { q } = searchParams
    const filteredQ: string = deslugify(q)
    const data = await findSets(filteredQ)

    return (
        <SearchTemplate data={data} q={filteredQ} />
    )
}

export default SearchPage