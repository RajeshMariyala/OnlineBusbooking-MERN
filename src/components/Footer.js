import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  return (<div>
    <footer className="footer-card">
      <div className="footer-card-content">
        <div className="footer-columns">
          <div className="column">
            <span class="L1">BookBus</span>

            <nav className="footer-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Services</Link></li>
                <li><Link to="/contactus">Contact</Link></li>

              </ul>
            </nav>
          </div>
          <div className="column">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/terms">Terms&Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/privacy">Cancel Policy</Link></li>
              <li><Link to="/privacy">Cancel Policy</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
          <div className="column">
            <h4>Additional Links</h4>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/support">Bus Routes</Link></li>
              <li><Link to="/support">Refer Friends</Link></li>
              <li><Link to="/support">Choose Us</Link></li>
            </ul>
          </div>
          <div className="column">
            <h4>Follow Us</h4>
            <br />
            <ul className="social-icons">
              <li><img src="https://freelogopng.com/images/all_img/1658030214facebook-logo-hd.png" alt="Facebook" /></li>
              <li><img src="https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png" alt="Twitter" /></li>
              <li><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png" alt="Facebook" /></li>
              <li><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="Twitter" /></li>

            </ul>

            <img src="https://meshpayments.com/wp-content/uploads/2022/06/Banner-2.png" alt="Facebook" width="280px" height="120px" style={{ marginLeft: "100px", marginTop: "10px" }} />

          </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;