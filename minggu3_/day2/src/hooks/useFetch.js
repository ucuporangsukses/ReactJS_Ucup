import { useEffect, useState } from "react";

// ⚡ Custom Hook: useFetch
export default function useFetch(url) {
  // state buat data, loading, dan error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect biar fetch dijalanin pas komponen mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // mulai fetch
        const response = await fetch(url);

        // kalo gagal
        if (!response.ok) throw new Error("Gagal fetch data bre 😭");

        // kalo sukses
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // jalan ulang kalo url berubah

  // return data yang dibutuhin
  return { data, loading, error };
}
