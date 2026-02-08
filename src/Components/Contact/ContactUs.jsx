import { p1, p2, p3 } from '../../assets/index'

const ContactUs = () => {
  return (
    <div>
      <section id="form_deatails" className="section-p1">
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We Love To Hear From You</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />

          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src={p1} alt="John Doe" />
            <p>
              <span>John Doe</span>
              <br /> Senior Marketing Manager
              <br /> Phone: +0001230007788
              <br /> Email: contact@gmail.com
            </p>
          </div>

          <div>
            <img src={p2} alt="William Smith" />
            <p>
              <span>William Smith</span>
              <br /> Senior Marketing Manager
              <br /> Phone: +0001230007788
              <br /> Email: contact@gmail.com
            </p>
          </div>

          <div>
            <img src={p3} alt="Emma Stone" />
            <p>
              <span>Emma Stone</span>
              <br /> Senior Marketing Manager
              <br /> Phone: +0001230007788
              <br /> Email: contact@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
