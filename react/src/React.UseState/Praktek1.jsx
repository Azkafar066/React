import { useState } from "react";
function Example() {
const[count,setCount]= useState(0); //Inisialisasi state dengan nilai awal 0

return (
<>
<h1>Counter: {count}</h1>
<button onClick={() => setCount(count+1)}>Tambah</button>
<button onClick={() => setCount(count-1)}>Kurangi</button>
<button onClick={() => setCount(0)}>Reset</button>
</>    
);
}
export default Example ;