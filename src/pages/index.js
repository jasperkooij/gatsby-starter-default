import * as React from "react"
import { Script } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TwitterEmbed = () => (
  <Layout>
    <h1>Twitter embed using Gatsby Script</h1>
    <p>Welcome to trying to embed Twitter using Gatsby Script</p>
    <a
      className="twitter-timeline"
      href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
    >
      Tweets by TwitterDev
    </a>
    <Script
      src="https://platform.twitter.com/widgets.js"
      strategy="off-main-thread"
    />
  </Layout>
)

export const Head = () => <Seo title="Twitter embed" />

export default TwitterEmbed
