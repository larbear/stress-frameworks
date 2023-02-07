import React, { useState } from "react";

let endAt = Date.now() + 10000;
const token = () => Math.random().toString(36).substring(2, 10);
const lots = [...Array(30000).keys()];
let timeout = null;

const go = (list, setList, setCounter) => {
  lots[5] = token();
  setList(lots);
  setCounter((c) => c + 1);

  if (Date.now() < endAt) {
    timeout = setTimeout(() => go(list, setList, setCounter), 1);
  }
};

function onRun(list, setList, setCounter) {
  setCounter(0);
  if (timeout) {
    clearTimeout(timeout);
  }
  endAt = Date.now() + 10000;
  timeout = setTimeout(() => go(list, setList, setCounter));
}

function App() {
  const [list, setList] = useState(lots);
  const [count, setCounter] = useState(0);

  return (
    <>
      <h1>
        React v{React.version} ({count})
      </h1>
      <button style={{ marginBottom: "1em" }} onClick={() => onRun(list, setList, setCounter)}>
        Run!
      </button>
      {list.map((i, j) => {
        return <div key={i}>{i}</div>;
      })}
    </>
  );
}

export default App;
