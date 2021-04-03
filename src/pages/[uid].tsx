import { GetStaticPaths, GetStaticProps } from 'next'
import { Client } from '../../prismic'

import resolver from '../../sm-resolver.js'

const Page = (props) => {
  console.log(props)

  return (
    <div className="page">
      Page by uid
    </div>
  )
}

export default Page