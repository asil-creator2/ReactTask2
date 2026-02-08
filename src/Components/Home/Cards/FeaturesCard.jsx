
const FeaturesCard = ({image,title}) => {
  return (
    <div className="fe-box">
      <img src={image} alt={title}/>
      <h6>{title}</h6>
    </div>

  )
}

export default FeaturesCard