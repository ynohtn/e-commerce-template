import { GetStaticPaths, GetStaticProps } from 'next'
import { Client } from '../../prismic'

import resolver from '../../sm-resolver.js'

const ProductsByUid = (props) => {
  console.log(props)

  return (
    <div className="page">
      ProductsByUid
    </div>
  )
}

export default ProductsByUid