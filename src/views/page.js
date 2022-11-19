import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Graceful Thankful Mouse</title>
        <meta property="og:title" content="Page - Graceful Thankful Mouse" />
      </Helmet>
    </div>
  )
}

export default Page
