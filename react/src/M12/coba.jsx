import {createBrowserRouter,RouterProvider} from 'react-router-dom';
function CobaRouter(){
return <h2>Halaman Utama</h2>;    
}
function Secondplace(){
return <h2>Halaman Kedua</h2>
}
const router = createBrowserRouter([
{
path:'/',
element:<CobaRouter/>,    
},
{
path: '/second',
element: <Secondplace/>,    
},
]);
function App(){
return <RouterProvider router={router}/>;    
}
export default App;