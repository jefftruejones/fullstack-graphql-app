import "./App.css";
import QueryTest from "./queryTest"


function App({ customers }) {
  return (
    <div className="App">
      <p>Hello World!</p>
      <QueryTest customers={customers}></QueryTest>
    </div>
  );
}

export default App;
