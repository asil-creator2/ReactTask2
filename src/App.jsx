
import Home from "./Pages/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import MainLayout from "./Layouts/MainLayout"
import Cart from "./Pages/Cart"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Shop from "./Pages/Shop"
import SecondaryLayout from "./Layouts/SecondaryLayout"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route element={<MainLayout/>}>
      <Route index element={<Home/>} />
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Product/>}/>
    </Route>
    <Route element={<SecondaryLayout/>}>
      <Route path="/cart" element={<Cart/>} />
    </Route>
  </Route>
))

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App