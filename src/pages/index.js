import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Home from '../components/Home'
import QuemSomos from '../components/QuemSomos'
import PostLink from "../components/PostLink"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  }
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <Home />
        <QuemSomos />
        <div className="trabalhos-home-index container">
          <h1>Trabalhos</h1>
          <div className="posts-list">
            {Posts}
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "BlogPost"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            img
            vimeo
            featured
          }
        }
      }
    }
  }
`
