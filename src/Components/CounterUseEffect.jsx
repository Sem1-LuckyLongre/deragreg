import { useEffect, useState } from "react";

export const CounterUseEffect = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    document.querySelector("title").innerText = `Count: ${count}`;
  }, [count]);
  document.querySelector("body").style.backgroundColor ="black";
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="flex flex-col justify-center gap-10 items-center">
      <h1 className="text-white text-4xl">UseEffect Challenge</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-white text-2xl font-mono">Count:{count} </h1>
        <button
          onClick={() => setCount(count + 1)}
          className="text-white bg-green-500 px-2 text-3xl rounded-2xl font-serif text-center py-1"
        >
          Increament
        </button>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-white text-2xl">
          Name: <span className="text-3xl text-blue-500 px-2">{value}</span>{" "}
        </h1>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-lg px-2 py-1 text-3xl font-sans"
          type="text"
        />
      </div>
    </div>
  );
};
