import { useState } from "react";

function App() {
  const [msg, setMsg] = useState();

  const fetchMsg = async () => {
    const res = await fetch("/api");
    const data = await res.json();
    setMsg(data);
  };

  fetchMsg();

  return (
    <>
      <h1>{msg}</h1>
    </>
  );
}

export default App;
