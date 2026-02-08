import ProductCard from "../Cards/ProductCard"
import {  
  f1Products,
  f2Products,
  f3Products,
  f4Products,
  f5Products,
  f6Products,
  f7Products,
  f8Products
} from '../../../assets/index'




const FeaturedSection = () => {
  const products = [
    {id:1, image:f1Products},
    {id:2, image:f2Products},
    {id:3, image:f3Products},
    {id:4, image:f4Products},
    {id:5, image:f5Products},
    {id:6, image:f6Products},
    {id:7, image:f7Products},
    {id:8, image:f8Products},
  ]
  return (
    <section id="Product1" className="section-p1">
          <h2>Featured Products</h2>
          <p>Summer Collection New Modern Design</p>
          <div className=" ">
            <div className="pro_container">
              {products.map(product => (
                <ProductCard key={product.id} image={product.image} />
              ))}
            </div>
      </div>
    </section>
  )
}

export default FeaturedSection