import React from 'react'
import { Link } from "react-router-dom"

const BlogGrid = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Link to="/blog/js in web dev." className='btn btn-primary'>view blog 1</Link></div>
                    <div className="col">
                        <Link to="/blog/html in web dev." className='btn btn-primary'>view blog 2</Link></div>
                    <div className="col">
                        <Link to="/blog/css in web dev." className='btn btn-primary'>view blog 3</Link></div>
                    <div className="col">
                        <Link to="/blog/bootstrap in web dev." className='btn btn-primary'>view blog 4</Link></div>
                </div>
            </div>
        </>
    )
}

export default BlogGrid
