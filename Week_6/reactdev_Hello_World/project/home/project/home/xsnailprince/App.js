import { useState } from "react";

export default function MyApp() {
  return (
    <div>
      <h1>Hello World!</h1>
      <MyButton />
      <MyButton2 />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Hello - clicked {count} times</button>;
}

function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>World - clicked {count} times</button>;
}
