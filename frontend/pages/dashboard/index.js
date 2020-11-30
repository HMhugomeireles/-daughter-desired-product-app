//import { useState, useEffect } from 'react'
import Layout from '../../components/container/layout';
import DashBoardContainer from '../../components/container/Dashboard' 

export default function DashBoard() {
    // const [data, setData] = useState([])


    // useEffect(() => {
    //   getAllSearchProduct().then(tasks => {
    //       console.log(tasks)
    //       setData(tasks)
    //     });
    // }, [])
  
    // function handle(e) {
    //   searchProduct('mackbook pro').then(tasks => {
    //     console.log(tasks)
    //     setData(tasks)
    //   });
    // }
  

    return (
        <Layout>
            <DashBoardContainer />
        </Layout>
    )
}