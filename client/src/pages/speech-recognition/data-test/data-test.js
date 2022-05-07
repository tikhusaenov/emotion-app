// import React, {useEffect, useState} from 'react'
// import axios from "axios"
//
// const DataTest = () => {
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true)
//
//     const fetchData = async () => {
//         setLoading(true)
//         try {
//             const { data: response } = await axios.get('/results')
//             setData(response)
//         } catch (error) {
//             console.error(error.message);
//         }
//         setLoading(false)
//     }
//
//     useEffect(() => {
//         fetchData()
//     }, [data])
//
//     return (
//         <div>
//             {JSON.stringify(data)}
//         </div>
//     )
// }
//
// export default DataTest
