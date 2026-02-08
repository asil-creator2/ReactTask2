import ProductCard from "../Cards/ProductCard"

import {
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
} from '../../../assets/index'
const NewArrivals = () => {
    const products  = [
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
        <h2>New Arrivals</h2>
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

export default NewArrivals