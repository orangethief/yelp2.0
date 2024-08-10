import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage  from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AllRestaurantsPage from './pages/AllRestaurantsPage'
import RestaurantDetailPage from './pages/RestaurantDetailPage'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />}/>
    <Route path="/all-restaurants" element={<AllRestaurantsPage  />}/>
    <Route path="/restaurant/:id" element={<RestaurantDetailPage />}/>
  </Route>
));

const App =() => {
  

  return <RouterProvider router={router} />;
  
};

export default App
