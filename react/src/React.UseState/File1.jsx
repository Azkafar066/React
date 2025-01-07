import { useState } from "react";
export default function GoodArray() {
    const [items, setItems] = useState([]);
  
    const addItem = () => {
      setItems([...items, `Item ${items.length + 1}`]); // Tambahkan item baru
    };
  
    return (
      <div>
        <h1>Daftar Item</h1>
        <button onClick={addItem}>Tambah Item</button>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
  function App() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  
    const removeItem = (indexToRemove) => {
      setItems(items.filter((_, index) => index !== indexToRemove));
    };
  
    return (
      <div>
        <h1>Daftar Item</h1>
        {items.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <button onClick={() => removeItem(index)}>Hapus</button>
          </div>
        ))}
      </div>
    );
  }
  
   