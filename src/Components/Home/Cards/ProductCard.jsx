import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCartPlus  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
const ProductCard = ({image}) => {
  return (
    <div>
        <div className="pro">

            <Link to='/product' ><img  src={image} alt=""/></Link>

            <div className="descreption">

            <span>adidas</span>
            <h5>Carton Astrount T-Shirts</h5>

            <div className="star">
            <a href="#" className="hvr-icon-pop">
                <FontAwesomeIcon icon={faStar} className="hvr-icon" />

            </a>      
            <a href="#" className="hvr-icon-pop">
                <FontAwesomeIcon icon={faStar} className="hvr-icon" />

            </a>    
            <a href="#" className="hvr-icon-pop">
                <FontAwesomeIcon icon={faStar} className="hvr-icon" />

            </a>      
            <a href="#" className="hvr-icon-pop">
                <FontAwesomeIcon icon={faStar} className="hvr-icon" />

            </a>      
            <a href="#" className="hvr-icon-pop">
                <FontAwesomeIcon icon={faStar} className="hvr-icon" />

            </a>

            </div>
            <h4>$90</h4>
            </div>
                <FontAwesomeIcon icon={faCartPlus} className="cart hvr-icon"/>
        </div>
    </div>
  )
}

export default ProductCard