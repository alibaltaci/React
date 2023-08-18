import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { blogPage } from "../../data/data.json"
import { url } from '../../utils'


function Blog() {

    const [ searchParams, setSearchParams ] = useSearchParams() // JS 'deki searchParams ile aynı
    
    const [ search, setSearch ] = useState( searchParams.get('search') || '')

    useEffect( () => {
        searchParams.set('search', search)

        if(!search){
            searchParams.delete('search')
        }
        setSearchParams(Object.fromEntries( [...searchParams] ))
    }, [search])
    
  return (
    <div>
        <div>Blog</div>
        <input type='text' defaultValue={search} onChange={ e => setSearch(e.target.value) } />
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
                    
                    // <Link key={post.path} to={`post/${post.path}`}>{ post.title }</Link>

                    <Link key={post.path} to={ url('home.blog.post', {
                        url: post.path
                    }) }>{ post.title }</Link>

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