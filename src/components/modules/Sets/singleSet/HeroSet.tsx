import Recommended from './Recommendation/Recommended'
import SetDetails from './SetDetails'
import { setTypeArray, setType } from 'types'
import { getRecommended } from '@utils/queries'


async function HeroSet(props: setType) {
  const relatedPosts: setTypeArray = await getRecommended(props.category?.title, props.title)
  return (
    <>
      <SetDetails {...props} />
      <div className='text-center w-2/3 mx-auto mt-8 font-semibold mb-20'>
        <span className='x text-danger-600'>Important</span>{":"}
        {`Following Valve's gifting policy. For first time customers, please note that after you purchase an item, we still need to be friends on Steam for 30 days, before we can gift your purchased item(s) in-game in dota 2. During check-out, please don't forget to enter your dota 2 id or steam profile link under the "special intructions for seller" box so we can add you up on steam and deliver your order, after the 30-day gifting cooldown has been completed.`}
      </div>
      {relatedPosts.length > 5 && <Recommended relatedPosts={relatedPosts.slice(0, 5)} title="Recommened for you" caption="Choose other cool sets from various collections" />}
    </>
  )
}

export default HeroSet