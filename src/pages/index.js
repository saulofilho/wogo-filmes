import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import Home from '../components/Home'
import QuemSomos from '../components/QuemSomos'
import PostLink from "../components/PostLink"

// https://origamid.com/projetos/flexbox-guia-completo/

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
  limit = 3
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .slice(0, limit)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <Home />
        <QuemSomos />
        <section className="trabalhos-home container">
          <h3>Trabalhos</h3>
          <div className="posts-list">
            {Posts}
          </div>
        </section>
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
