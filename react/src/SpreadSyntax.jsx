function Image({ src, alt, size }) {
  return (
    <>
      <img src={src} alt={alt} style={{ width: size, height: size }} />
    </>
  );
}
function ChildComponent({ title, description, age, ...props }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{age}</p>
      <Image {...props} />
    </div>
  );
}
export default function ParentComponent2() {
  return (
    <>
      <Children>
        <ChildComponent
          title="title"
          description="Description"
          age={20}
          src="horse.png"
          alt="cobaRasdeasct"
          size="100px"
        />
      </Children>
    </>
  );
}
function Children({ children }) {
  return <div style={{ backgroundColor: "red" }}>{children}</div>;
}
