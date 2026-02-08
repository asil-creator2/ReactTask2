import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import NewsLetter from "../Components/Home/Sections/NewsLetter"

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <NewsLetter/>
    <Footer/>
    </>

  )
}

export default MainLayout