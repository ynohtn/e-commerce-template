import { GetStaticPaths, GetStaticProps } from 'next'
import { Client } from '../../prismic'

const Page = (props) => {
  return (
    <div className="page">
      Page by uid
    </div>
  )
}

export default Page