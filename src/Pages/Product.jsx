import { useState } from "react";
import { f1Products, f2Products, f3Products, f4Products } from "../assets/index";
import FeaturedSection from "../Components/Home/Sections/FeaturedSection";
import ProductGallary from "../Components/Product/ProductGallary";
import ProductInfo from "../Components/Product/ProductInfo";

const Product = () => {
  const images = [f1Products, f2Products, f3Products, f4Products];

  // ⭐ الصورة الرئيسية
  const [mainImage, setMainImage] = useState(f1Products);

  return (
    <>
      <section id="proDeatails" className="section-p1">
        <div className="single_pro_image">

          {/* Main Image */}
          <ProductGallary image={mainImage} id="MainImage" />

          <div className="small-img-group">
            {images.map((image, index) => (
              <ProductGallary
                key={index}
                image={image}
                // onlick make it the main image
                onclick={() => setMainImage(image)} 
              />
            ))}
          </div>
        </div>

        <ProductInfo />
      </section>

      <FeaturedSection />
    </>
  );
};

export default Product;
