import "./index.css";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";

import { useState } from "react";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const [newItem, setnewItem] = useState("");

  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    const newlistItem = [...items, myNewItem];
    setItems(newlistItem);
    localStorage.setItem("list", JSON.stringify(newlistItem));

    setnewItem("");
  };

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
      <AddItem
        newItem={newItem}
        setnewItem={setnewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
// [
//   { id: 1, checked: false, item: "first react app" },
//   { id: 2, checked: false, item: "second react app" },
//   { id: 3, checked: false, item: " third react app" },
// ]
