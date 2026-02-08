import { aboutVideo } from "../../assets/index"

const AboutApp = () => {
  return (
    <div>
        <section id="about_app"  className="section-p1 ">
        <h1>Download Our <a href="#">App</a> </h1>
        

        <div className="video" >
            <video autoplay muted loop src={aboutVideo}></video>
        </div>

        </section>
    </div>
  )
}

export default AboutApp