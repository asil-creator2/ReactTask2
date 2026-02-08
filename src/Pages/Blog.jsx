import BlogBanner from '../Components/Blog/BlogBanner'
import BlogCard from '../Components/Blog/BlogCard'
import Pagination from '../Components/Shop/Pagination'
import {
  b1Blog,
  b2Blog,
  b3Blog,
  b4Blog,
  b5Blog,
  b6Blog,
  b7Blog,
} from '../assets/index'
const Blog = () => {
  const images = [b1Blog,b2Blog,b3Blog,b4Blog,b5Blog,b6Blog,b7Blog,]
  return (
    <div >
      <BlogBanner/>
      <div id="blog"> 
      {images.map((image,index) => (<BlogCard key={index} image={image}/>))}
      <Pagination/>
      </div>
    </div>
  )
}

export default Blog