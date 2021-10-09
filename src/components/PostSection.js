import React from 'react'
import './PostSection.scss'
import { Link } from 'gatsby'

const PostSection = ({
  posts = [],
}) => {
  return (
    <>
      {posts.map(post => (
        <div className="post-item" key={post.id}>
          <p className="date-info">
            {post.frontmatter.date}
          </p>
          <Link to={post.fields.slug} className="post-link">
            {post.frontmatter.title}
          </Link>
          <p className="excerpt">
            {post.excerpt}
          </p>
          {post.frontmatter.img ? <div>
            {post.frontmatter.img && <div className="img-home"
              style={{
                backgroundImage: `url(${post.frontmatter.img})`
              }} />}
          </div> : ''
          }
          {post.frontmatter.vimeo ?
            <div
              className="vimeo-home"
              dangerouslySetInnerHTML={{ __html: post.frontmatter.vimeo }}
            /> : ''
          }
        </div>
      ))}
    </>
  )
}

export default PostSection
