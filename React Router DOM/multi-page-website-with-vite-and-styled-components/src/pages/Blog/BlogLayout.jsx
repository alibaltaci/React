import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (
    <>
        <div>BlogLayout</div>
        <Outlet />
    </>
  )
}

export default BlogLayout