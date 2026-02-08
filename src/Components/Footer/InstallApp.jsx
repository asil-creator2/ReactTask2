import {app,playPay,pay} from '../../assets/index'
const InstallApp = () => {
  return (
             <div className="col install">
            <h4>Install App</h4>
            <p>From App Store Or Google Play</p>
            <div className="row">
                <img src={app} alt=""/>
                <img src={playPay} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt=""/>

         </div>

  )
}

export default InstallApp