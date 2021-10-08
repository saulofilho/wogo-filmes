import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { PlusCircle } from 'react-feather'
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"

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
        <section className="noticias-home container">
          <h3>Exemplo</h3>
          <div className="posts-list">
            {Posts}
          </div>
          <Link to={"/Exemplo"}>
            <PlusCircle
              className="plus"
            />
          </Link>
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
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
          }
        }
      }
    }
  }
`
