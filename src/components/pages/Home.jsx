import React from 'react'

import { useParams } from 'react-router-dom'

import Header from '../sections/Header'
import Footer from '../sections/Footer'
import AboutUs from '../sections/AboutUs'
import Heros from '../sections/Heros'
import BlogGrid from '../sections/BlogGrid'

const Home = () => {

    let { data } = useParams()

    // request query, read query and render query

    let GetQueryData = () => {

        console.log(data)
    }

    return (
        <>
            <Header />
            <button className='btn btn-danger m-5' onClick={GetQueryData}>get query</button>
            <Heros />
            <BlogGrid />
            <AboutUs />
            <Footer />
        </>
    )
}

export default Home
