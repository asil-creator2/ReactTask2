
const ProductGallary = ({image,id = '',onclick}) => {
  return (
    <div className='small-image-col'>
        <img src={image} width="100%" className="small_img" alt="" id = {id} onClick={onclick}/>
    </div>
  )
}

export default ProductGallary