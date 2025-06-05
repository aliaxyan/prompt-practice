import {useState,useEffect}from'react';

export default function Dashboard(){
  const [d,setD] = useState<number|null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./worker.js', import.meta.url));
    
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage(null);
    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
}
