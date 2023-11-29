export default function Footer() {
  return (
    <section className="section-footer">
      <div className="footer-logo-container">
        <img src="/logo.svg" alt="logo" />
      </div>

      <div className="footer-links-container">
        <div>
          <p className="footer-links-heading">Features</p>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="#">Link Shortening</a>
            </li>
            <li className="footer-link">
              <a href="#">Branded Links</a>
            </li>
            <li className="footer-link">
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-links-heading">Resources</p>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="#">Blogs</a>
            </li>
            <li className="footer-link">
              <a href="#">Developers</a>
            </li>
            <li className="footer-link">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-links-heading">Company</p>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="#">About</a>
            </li>
            <li className="footer-link">
              <a href="#">Our Team</a>
            </li>
            <li className="footer-link">
              <a href="#">Careers</a>
            </li>
            <li className="footer-link">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-social-container">
        <ul className="social-links">
          <li className="social-link">
            <a href="#">
              <img src="/icon-facebook.svg" alt="faceBook icon" />
            </a>
          </li>
          <li className="social-link">
            <a href="#">
              <img src="./icon-instagram.svg" alt="instagram icon" />
            </a>
          </li>
          <li className="social-link">
            <a href="#">
              <img src="./icon-twitter.svg" alt="twitter icon" />
            </a>
          </li>
          <li className="social-link">
            <a href="#">
              <img src="./icon-pinterest.svg" alt="pinterest icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
