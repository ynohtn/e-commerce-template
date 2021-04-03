import { GetStaticPaths, GetStaticProps } from 'next'
import { Client } from '../../prismic'

import resolver from '../../sm-resolver.js'

const ShopByUid = (props) => {
  console.log(props)

  return (
    <div className="page">
      ShopByUid
    </div>
  )
}

export default ShopByUid