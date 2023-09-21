import "./index.css";
import Header from "./Header";
import Content from "./Content";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "first react app" },
    { id: 2, checked: false, item: "second react app" },
    { id: 3, checked: false, item: " third react app" },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("list", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="tesfes groccery" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
