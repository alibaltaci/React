import React from 'react'
import { Link } from 'react-router-dom'
import { blogPage } from "../../data/data.json"


function Blog() {
    
  return (
    <div>
        <div>Blog</div>
        <div>
            <ul>
                <li>
                    <a href='#'>Blog 1</a>
                </li>
                <li>
                    <a href='#'>Blog 2</a>
                </li>
                <li>
                    <a href='#'>Blog 3</a>
                </li>
            </ul>
            {
                blogPage.posts.map( (post) => (
                    <Link key={post.path} to={`post/${post.path}`}>{ post.title }</Link>
                    ))
                }
            {/* <Link to='./post/post1' >Post-1</Link>
            <Link to='./post/post2' >Post-2</Link>
            <Link to='./post/post3' >Post-3</Link> */}
        </div>
    </div>

  )
}

export default Blog