import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <Link to={post.fields.slug} className="post-link">
    <div className="post-item">
      {post.frontmatter.featured === 'img' ?
        // <div className="img-home"
        //   style={{
        //     backgroundImage: `url(${post.frontmatter.img})`
        //   }} />
        <img src={post.frontmatter.img} alt="" />
        : ''
      }
      {post.frontmatter.featured === 'vimeo' ?
        <div
          className="vimeo-home"
          dangerouslySetInnerHTML={{ __html: post.frontmatter.vimeo }}
        /> : ''
      }
    </div>
  </Link>
)
export default PostLink
