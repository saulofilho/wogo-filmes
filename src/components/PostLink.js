import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <div className="post-item">
    <Link to={post.fields.slug} className="post-link">
      {post.frontmatter.featured === 'img' ?
        <div className="img-home"
          style={{
            backgroundImage: `url(${post.frontmatter.img})`
          }} /> : ''
      }
      {post.frontmatter.featured === 'vimeo' ?
        <div
          className="vimeo-home"
          dangerouslySetInnerHTML={{ __html: post.frontmatter.vimeo }}
        /> : ''
      }
    </Link>
  </div>
)
export default PostLink
