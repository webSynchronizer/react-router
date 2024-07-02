import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Header from '../sections/Header'
import Footer from '../sections/Footer'

let blogs = [
    {
        title: "js in web dev.",
        body: "this is content",
        id: 1
    },
    {
        title: "html in web dev.",
        body: "this is content",
        id: 2
    },
    {
        title: "css in web dev.",
        body: "this is content",
        id: 3
    },
    {
        title: "bootstrap in web dev.",
        body: "this is content",
        id: 4
    }
]


const Blog = () => {


    useEffect(() => {

        if (blogname) {
            getBlog()
        } else {
            alert("not set yet")
        }

        console.log(blogData)

    }, [blogs])

    let [blogData, setBlogData] = useState(false)

    let { blogname } = useParams()

    let getBlog = () => {

        console.log(blogname)

        setBlogData(() => {
            let data = blogs.filter((blog) => {
                return blogname == blog.title
            })

            console.log(data)

            return data

        })
    }

    return (
        <>
            <Header />

            <h2>You have visited : {blogname} !</h2>

            {/* render the blog */}


            {
                blogData ?
                <div>
                    <h1>{blogData[0].title}</h1>
                    <h5>{blogData[0].body}</h5>
                    <h2>{blogData[0].id}</h2>
                </div>
                : null
            }


            <Footer />
        </>
    )
}

export default Blog
