import { useState, useEffect } from 'react'
import {getAllTasks, createTask} from '../services/Products'


const useMounted = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

export default function Index() {
  const [data, setData] = useState([])


  useEffect(() => {
    getAllTasks().then(tasks => {
        console.log(tasks)
        setData(tasks)
      });
  }, [])

  function handle(e) {
    createTask('mackbook pro').then(tasks => {
      console.log(tasks)
      setData(tasks)
    });
  }


  return (
    <div>
      <button onClick={handle}>load</button>
      <content>
        <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
      </content>
    </div>
  )
}