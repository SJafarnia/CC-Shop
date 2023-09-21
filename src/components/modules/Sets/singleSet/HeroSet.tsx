import prisma from '@utils/prisma'
import Recommended from './Recommendation/Recommended'
import SetDetails from './SetDetails'
import { setTypeArray, setType } from 'types'


async function HeroSet(props: setType) {
  const relatedPosts: setTypeArray | null = await prisma.heroSet.findMany({
    where: {
      category: {
        title: props.category?.title
      },
      NOT: {
        title: props.title
      }
    },
    include: {
      HeroImg: true,
      category: true
    }
  })

  return (
    <>
      <SetDetails {...props} />
      <div className='text-center w-2/3 mx-auto mt-8 font-semibold mb-20'>
        <span className='x text-danger-600'>Important</span>: Following Valve's gifting policy. For first time customers, please note that after you purchase an item, we still need to be friends on Steam for 30 days, before we can gift your purchased item(s) in-game in dota 2. During check-out, please don't forget to enter your dota 2 id or steam profile link under the "special intructions for seller" box so we can add you up on steam and deliver your order, after the 30-day gifting cooldown has been completed.
      </div>
      {relatedPosts.length > 2 && <Recommended relatedPosts={relatedPosts.slice(0, 5) || []} />}
    </>
  )
}

export default HeroSet