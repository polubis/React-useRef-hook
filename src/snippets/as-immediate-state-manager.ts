import { useRef, useState } from "react";

const useCounter = () => {
  const syncCounter = useRef(0);
  const [asyncCounter, setAsyncCounter] = useState(0);

  const asyncIncrement = () => {
    // This is not an immediate change, just a request
    setAsyncCounter((prevCounter) => prevCounter + 1);
    console.log(asyncCounter); // 0
    console.log(asyncCounter); // 0
    console.log(asyncCounter); // 0
  };

  const syncIncrement = () => {
    // This is an immediate change
    syncCounter.current = syncCounter.current + 1;
    syncCounter.current = syncCounter.current + 1;
    syncCounter.current = syncCounter.current + 1;
    console.log(syncCounter.current); // 0
    console.log(syncCounter.current); // 1
    console.log(syncCounter.current); // 2
  };
};
