import { useState } from "react";
export default function Arrays() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  
    const updateItem = (indexToUpdate, newValue) => {
      setItems(
        items.map((item, index) => (index === indexToUpdate ? newValue : item))
      );
    };
  
    return (
      <div>
        <h1>Daftar Item</h1>
        <p>{items}</p>
        {items.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <button onClick={() => updateItem(index, `Item ${index + 1} Updated`)}>
              Update
            </button>
          </div>
        ))}
      </div>
    );
  }