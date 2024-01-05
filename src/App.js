import FbPost from "./Components/FbPost";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  useEffect(function () {
    allData();
  });

  function allData() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setList(res.products));
    console.log(list);
  }
  return (
    <div>
      <FbPost />
    </div>
  );
}

export default App;
