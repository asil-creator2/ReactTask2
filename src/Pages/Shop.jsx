import ShopBanner from '../Components/Shop/ShopBanner'
import Products from '../Components/Shop/Products'
import Pagination from '../Components/Shop/Pagination'
const Shop = () => {
  return (
    <div className=''>
      <ShopBanner/>
      <Products/>
      <Pagination/>
    </div>
  )
}

export default Shop