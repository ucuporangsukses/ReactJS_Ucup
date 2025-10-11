import { useEffect, useState } from "react"

export default function UseEffectSederhana() {
  const [data, setData] = useState (null)
  const [loading, setLoading] = useState (true)
  const [error, setError] = useState (null)

  useEffect (() => {
    const fetchData = async() => {
      try {
        const ress = await fetch("https://jsonplaceholder.typicode.com/posts/1")
      if (!ress.ok) {throw new Error("Eror gebleg") }
        const data = await ress.json()
        setData(data)
      } catch (err) {
        setError(err)
      }finally{setLoading(false)}
    }
    fetchData ();
  },[])
  if (loading) {
    return <p>lebih sabar</p>
  }if (error) {
    return <p>erorr oon</p>
  }
  return(
    <div>
      <h2>Ini data user bun</h2>
      <p>{data.title}</p>
    </div>
  )
}