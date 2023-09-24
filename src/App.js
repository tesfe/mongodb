import "./index.css";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Practice from "./Practice";
import apiRequest from "./apiRequest";
import Practice2 from "./Practice2";
import { useState, useEffect } from "react";
//import { type } from "@testing-library/user-event/dist/type";
function App() {
  const [items, setItems] = useState([]);
  // console.log(items);
  const [newItem, setnewItem] = useState("");

  const [search, setSearch] = useState("");
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setisloading] = useState(true);
  const API_URL = "http://localhost:3500/items";
  //useeffect is promise type which answer later on
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("did not recieve the expected data");
        const jsonItems = await response.json();

        setItems(jsonItems);
        setfetchError(null);
        console.log(jsonItems);
      } catch (error) {
        // console.log(error.message)
        setfetchError(error.message);
      } finally {
        setisloading(false);
      }
    };

    //this is called a instnatly invoked function expression(IIFE)
    // (async () => await fetchedData())();
    setTimeout(() => fetchedData(), 2000);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    const postOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOption);
    if (result) setfetchError(result);
    setnewItem("");
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = items.filter((item) => item.id === id);
    console.log(myItem);
    const patch = { checked: myItem[0].checked };
    const postOption = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(patch),
    };
    const url = `${API_URL}/${id}`;
    const result = await apiRequest(url, postOption);
    if (result) setfetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const postOption = {
      method: "DELETE",
    };
    const url = `${API_URL}/${id}`;
    const result = await apiRequest(url, postOption);
    if (result) setfetchError(result);
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
      <main>
        {fetchError && <p style={{ color: "red" }}>{`Error:${fetchError}`}</p>}
        {!fetchError && isLoading && <p> Loading... </p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            //.includes returns empty string is truthy coz an empty string is substring of any string
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Practice />
      <Practice2 />
    </div>
  );
}

export default App;
// [
//   { id: 1, checked: false, item: "first react app" },
//   { id: 2, checked: false, item: "second react app" },
//   { id: 3, checked: false, item: " third react app" },
// ]
