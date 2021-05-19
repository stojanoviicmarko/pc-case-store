import { FC } from 'react'
import '../styles/footer.css'
import instagramLogo from '../assets/icons/instagram.svg'
import twitterLogo from '../assets/icons/twitter.svg'
import facebookLogo from '../assets/icons/facebook.svg'

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__social">
          <h1>Connect with us</h1>
          <div className="social__links">
            <img className="instagram__image" src={instagramLogo} alt="instagram" />
            <img className="facebook__image" src={facebookLogo} alt="facebook" />
            <img className="twitter__image" src={twitterLogo} alt="twitter" />
          </div>
        </div>
        <div className="footer__pages">
          <h1>Quick Links</h1>
          <ul className="footer__links">
            <li>Products</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="footer__right">
        <h1 className="newsletter__title">Join Our Newsletter</h1>
        <p className="newsletter__paragraph">Be the first to know about our latest offerings and promotions.</p>
        <div className="newsletter__form">
          <input className="newsletter__input" type="text" placeholder="Enter your email" />
          <button className="newsletter__submit">SUBMIT</button>
        </div>
      </div>
    </div>
  )
}
