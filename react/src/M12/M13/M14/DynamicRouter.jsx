import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DetailProduct />,
  },
  {
    path: "/:id",
    element: <DetailProduct />,
  },
]);

function DetailProduct() {
  const { id } = useParams();
  
  return (
    <>
      <h1>Detail Page</h1>
      <p>Product ID: {id}</p>
    </>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

