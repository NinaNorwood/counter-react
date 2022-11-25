import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
 // const [data, setData] = useState("");
  //  <input onChange={(event) => setData(event.target.value)}></input>
   // <h1>{data}</h1>

  const onButtonPressPlus = () => {
    setCount(count+1);
}

    const onButtonPressMinus = () => {
     setCount(count-1);
}

  return (
    <div className="App">
      <button className="more" onClick={onButtonPressPlus}>Click for more</button>
        <h1>{count}</h1>
      <button className="less" onClick={onButtonPressMinus}>Click for less</button>
    </div>
  );
}

export default App;
