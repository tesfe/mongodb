import { useRef } from "react";

const AddItem = ({ handleSubmit, newItem, setnewItem }) => {
  const inputRef = useRef();

  return (
    <form className="adItem" onSubmit={handleSubmit}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        value={newItem}
        onChange={(e) => setnewItem(e.target.value)}
      />
      <button type="submit" onClick={(e) => inputRef.current.focus()}>
        add
      </button>
    </form>
  );
};

export default AddItem;
