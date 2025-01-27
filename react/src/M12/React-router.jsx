// Import library React dan React Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Komponen HomePage
function HomePage() {
  return <h1>Ini adalah halaman pertama</h1>;
}

// Komponen AboutPage
function AboutPage() {
  return <h1>Ini adalah halaman about</h1>;
}

// Definisikan rute menggunakan createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />, // Rute untuk HomePage
  },
  {
    path: '/about',
    element: <AboutPage />, // Rute untuk AboutPage
  },
]);

// Render aplikasi dengan RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



