import React from 'react'
import HeroSet from '../modules/Sets/singleSet/HeroSet'
import { setType } from 'types'

function SingleSetTemplate(props: setType) {

    return (
        // <></>

        <HeroSet {...props}/>
        // <HeroSet {...props} />
    )
}

export default SingleSetTemplate