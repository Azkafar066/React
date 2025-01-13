import { useState } from "react";

const SimpleNameList = () => {
  const [names, setNames] = useState(["Alice", "Bob"]);

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button
        onClick={() => setNames([...names, "Charlie"])}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Tambah Nama
      </button>
    </div>
  );
};

export default SimpleNameList;