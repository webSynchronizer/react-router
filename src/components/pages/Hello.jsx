import React from 'react'
import { useParams } from 'react-router-dom'



const Hello = () => {
    let { user } = useParams()
    return (
        <div>
            <h1>welcome to hello page</h1>
        </div>
    )
}

export default Hello
