import React from "react"
import { Link } from "gatsby"
import './PostLink.scss'

const PostLink = ({ post }) => (
  <Link to={post.fields.slug} className="post-link">
    <div className="post-item">
      {post.frontmatter.featured === 'img' ?
        <img src={post.frontmatter.img} alt="" />
        : <div
          className="vimeo-home"
          dangerouslySetInnerHTML={{ __html: post.frontmatter.vimeo }}
        />
      }
    </div>
  </Link>
)
export default PostLink
