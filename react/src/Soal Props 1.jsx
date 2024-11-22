import React from "react";
// Komponen Greeting
const Greeting = ({ name, message }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{message}</p>
    </div>
  );
};
// Komponen utama App
const App = () => {
  return (
    <div>
      <Greeting name="Alice" message="Welcome To React" />
    </div>
  );
};
export default App;




