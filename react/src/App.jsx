export default function App() {
  const title = "Coba JSX{}";
  const paragraph = "Lorem ipsum dolor sit amet.";
  const tema = {
    paragraph: {
      backgroundColor: "blue",
      color: "white"
    }
  };

  return (
    <>
      <img src="cobaReact.png" alt="cobaReact" />
      <h1 style={{ color: "red" }}>{title}</h1>
      <p className="testing" style={tema.paragraph}>
        {paragraph}
      </p>
    </>
  );
}