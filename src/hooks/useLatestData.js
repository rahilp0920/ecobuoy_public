import { useEffect, useState } from 'react';

export default function useLatestData() {
  const [data, setData] = useState({
    tds: null,
    temperature: null,
    battery: null,
    bottle: null,
    bag: null,
    other: null,
    plastic: null,
    timestamp: ""
  });

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/latest-data');
      const json = await res.json();
      if (json) setData(json);
    } catch (e) {
      // Optionally handle errors here
      // setData({ ...data, error: true });
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000); // Poll every 2 seconds
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return data;
}
