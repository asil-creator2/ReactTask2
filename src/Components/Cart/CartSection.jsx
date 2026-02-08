import {
  f1Products,
  f2Products,
  f3Products,
} from '../../assets/index'
const CartSection = () => {
  return (
    <div>
            <section id="cart" className="section-p1 " >
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Imag</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>SubTotal</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={f1Products} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>

                
                <tr>
                    <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={f2Products} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>


                
                <tr>
                    <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={f3Products} alt=""/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>


            </tbody>
        </table>

    </section>
    </div>
  )
}

export default CartSection