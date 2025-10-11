import { useEffect, useState } from "react";

export default function AbortSimulation() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal

        const fetchData = async () => {
            try {
                const ress = await fetch("https://jsonplaceholder.typicode.com/posts/1", {signal});
                if (!ress.ok) {
                    throw new Error("LO gagal ambil data")
                }
                const result = await ress.json();
                setData(result)
                
                
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch di batalkan")
                }else {
                    setError(err.message);
                }
            }finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => {
            controller.abort();
            console.log("ini soal no 4");
            
        }
    },[])
    if (loading) {
        return <p>Sabar Lagi ambil data woi</p>
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return(

        <div>
            <p>{data.title}</p>
            <p>{data.body}</p>
        </div>
    )
}