import { useState, useEffect } from 'react'

export default function DashBoard() {
    const [data, setData] = useState([])


    useEffect(() => {
      getAllSearchProduct().then(tasks => {
          console.log(tasks)
          setData(tasks)
        });
    }, [])
  
    function handle(e) {
      searchProduct('mackbook pro').then(tasks => {
        console.log(tasks)
        setData(tasks)
      });
    }
  

    return <div><h1>Dashboard</h1></div>
}