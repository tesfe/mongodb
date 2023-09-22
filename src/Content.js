import ListItems from "./ListItems";

const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <main>
      {items.length ? (
        <ListItems
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
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
