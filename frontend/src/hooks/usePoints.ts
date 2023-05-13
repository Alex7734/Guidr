import {useState, useEffect } from 'react'

const usePoints = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
      fetch('http://127.0.01:8055/items/point?limit=100')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
    }, [])


    return { data, loading, error }
}

export default usePoints;