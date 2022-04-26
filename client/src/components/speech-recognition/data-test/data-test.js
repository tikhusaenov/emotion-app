import React, { useState, useEffect } from 'react'

const DataTest = () => {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch('/members')
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })

    }, [])

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default DataTest
