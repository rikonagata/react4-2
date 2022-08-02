import React from "react";

function Password({ value, onChange }) {
  const [type, setType] = React.useState("password");

  const handleClick = () => setType(type === "password" ? "text" : "password");

  return (
    <>
      <input type={type} value={value} onChange={onChange} />
      <button onClick={handleClick}>
        {type === "password" ? "見る" : "隠す"}
      </button>
    </>
  );
}

function App() {
  const [val, setVal] = React.useState("");

  const handleChange = (e) => setVal(e.target.value);

  return (
    <>
      <p>パスワード</p>
      <Password value={val} onChange={handleChange} />
      <p>{val.length}文字</p>
    </>
  );
}
export default App;

//const root = document.getElementById("root");
//ReactDOM.render(<App />, root);
