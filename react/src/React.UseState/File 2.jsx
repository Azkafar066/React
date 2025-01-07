import { useState } from "react";
export default function ArrayKosong() {
  const [items, setItems] = useState([]); // Inisialisasi state sebagai array kosong

  return (
    <div>
      <h1>Daftar Item</h1>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}