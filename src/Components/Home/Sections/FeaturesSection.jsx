import {f1Features,f2Features,f3Features,f4Features,f5Features,f6Features} from "../../../assets/index"
import FeaturesCard from "../Cards/FeaturesCard"
const FeaturesSection = () => {
    const images = [f1Features,f2Features,f3Features,f4Features,f5Features,f6Features]
    const cards = [
        {id:1,img:images[0],title:'Free Shipping'},
        {id:2,img:images[1],title:'Online Order'},
        {id:3,img:images[2],title:'Save Money'},
        {id:4,img:images[3],title:'Promotions'},
        {id:5,img:images[4],title:'Happy Sall'},
        {id:6,img:images[5],title:'F24/7 Support'},
    ]
    return (
    <section id="Features" className="section-p1">
        {cards.map(card => (
            <FeaturesCard key={card.id} image={card.img} title={card.title}/>
        ))}
    </section>
  )
}

export default FeaturesSection