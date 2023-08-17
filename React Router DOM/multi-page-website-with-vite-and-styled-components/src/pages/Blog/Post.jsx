import React from 'react'
import { useParams } from 'react-router-dom'
import { blogPage } from "../../data/data.json"

function Post() {

  // const params = useParams()
  
  const {url} = useParams()
  // const post = blogPage.posts.filter( el => el.path === url )[0]
  const post = blogPage.posts.find( el => el.path === url )
  // console.log(post)

  return (
    <div>
      <div>{post.title}</div>
      <div>URL: {url}</div>
      <p>{post.detail}</p>
      {/* <div>URL: {params.url}</div> */}
    </div>
  )
}

export default Post