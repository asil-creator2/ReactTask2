
const ProductInfo = () => {

  return (
    <div className="single_pro_deatails">
      <h6>Home / T-Shirt</h6>
      <h4>Men's Fashion T-Shirt</h4>
      <h2>$139.00</h2>

      <select>
        <option>Select Size</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
        <option>X Large</option>
      </select>

    <input type="number" value="1"/>


      <button className="normal">Add To Cart</button>

      <h4>Product Details</h4>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id beatae
        veritatis dolor pariatur iusto autem quod dolore, quaerat assumenda
        itaque sed quos corporis a.
      </span>
    </div>
  )
}

export default ProductInfo
