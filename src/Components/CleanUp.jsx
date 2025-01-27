import { useEffect, useState } from "react";

export const CleanUp = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
        setCount((prev) => prev + 1)
    }, 1000);
    return () => clearInterval(timer);
  }, [])
  return <h5 className="text-white text-8xl my-20 font-mono text-center">{count}</h5>;
};
