import FooterAbout from "./Footer/FooterAbout"
import Account from "./Footer/Account"
import FooterContact from "./Footer/FooterContact"
import InstallApp from "./Footer/InstallApp"

const Footer = () => {
  return (
    <footer className="section-p1 ">
        <FooterContact/>
        <FooterAbout/>
        <Account/>
        <InstallApp/>
        <div className="copyRight">
            <p>@ 2022, Tech2 etc - HTML CSS ECOMMERCE TEMPLETS</p>
         </div>
    </footer>

  )
}

export default Footer