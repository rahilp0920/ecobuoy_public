export default function useLatestCamera() {
  const [data, setData] = useState({ image: '', timestamp: '' });

  const fetchImage = async () => {
    const res = await fetch('http://localhost:5000/api/latest-camera');
    const json = await res.json();
    if (json.image) {
      json.image = `http://localhost:5000/api${json.image}`;
    }
    setData(json);
  };

  useEffect(() => {
    fetchImage();
    const interval = setInterval(fetchImage, 2000); // refresh every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return data;
}
