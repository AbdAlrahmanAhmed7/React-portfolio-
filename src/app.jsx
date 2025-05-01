import { useState } from "react";

function Btn() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Click {count} times</button>;
}

export default function App() {
  return (
    <div>
      <Btn />
    </div>
  );
}