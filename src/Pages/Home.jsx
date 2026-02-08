import Banner from "../Components/Home/Sections/Banner"
import FeaturesSection from "../Components/Home/Sections/FeaturesSection"
import FeaturedSection from "../Components/Home/Sections/FeaturedSection"
import HeroSection from "../Components/Home/Sections/HeroSection"
import NewArrivals from "../Components/Home/Sections/NewArrivals"
import CollectionSection from "../Components/Home/Sections/CollectionSection"
import NewsLetter from "../Components/Home/Sections/NewsLetter"
const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      <FeaturedSection/>
      <Banner/>
      <NewArrivals/>
      <CollectionSection/>
     </>
  )
}

export default Home