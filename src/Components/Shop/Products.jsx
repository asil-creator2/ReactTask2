import ProductCard from "../Home/Cards/ProductCard"
import {  
  f1Products,
  f2Products,
  f3Products,
  f4Products,
  f5Products,
  f6Products,
  f7Products,
  f8Products,
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
} from '../../assets/index'
const Products = () => {
  const products = [
    {id:1, image:f1Products},
    {id:2, image:f2Products},
    {id:3, image:f3Products},
    {id:4, image:f4Products},
    {id:5, image:f5Products},
    {id:6, image:f6Products},
    {id:7, image:f7Products},
    {id:8, image:f8Products},
    {id:9 , image: n1},
    {id:10, image:n2},
    {id:11, image:n3},
    {id:12, image:n4},
    {id:13, image:n5},
    {id:14, image:n6},
    {id:15, image:n7},
    {id:16, image:n8},
  ]
  return (
    <section id="Product1" className="section-p1">
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

export default Products