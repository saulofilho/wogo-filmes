import React from "react"
import Helmet from 'react-helmet';
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import './blogTemplate.scss'

export default function Template({
  data,
}) {

  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.metaDescription} />
      </Helmet>
      <div className="Blog-post container">
        {post.frontmatter.img && <div className="img-post"
          style={{
            backgroundImage: `url(${post.frontmatter.img})`
          }} />}
        <article className="post">
          <h1>
            {post.frontmatter.title}
          </h1>
          <div className="site-wrapper">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {post.frontmatter.vimeo ?
              <div
                className="vimeo-home"
                dangerouslySetInnerHTML={{ __html: post.frontmatter.vimeo }}
              /> : ''
            }
            <div className="voltar">
              <Link to="/trabalhos">⟵ Voltar</Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        img
        vimeo
      }
    }
  }
`
