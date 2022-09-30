import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my life!</h1>
      <Link to='/about'>About Me</Link>
      <Link to='/blogs'>Blogs </Link>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage