import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
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
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label>{item.item}</label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>No items are found</p>
      )}
    </main>
  );
};
export default Content;
//concept for useState

//  const [name, setName] = useState("tesfe");
//   const handleNameChange = () => {
//     const names = ["letu", "bisr", "rahel"];
//     const int = Math.floor(Math.random() * 3);
//     return setName(names[int]);
//   };

//   const handleClick2 = () => {
//     console.log("e.target.textContent");
//   };

//   return (
//     <main>
//       <p onClick={handleNameChange}>hello &nbsp;{name}</p>
//       <button onClick={() => handleNameChange()}>click It</button>
//       <button onClick={() => handleClick2()}>click It</button>
//     </main>
//   );
