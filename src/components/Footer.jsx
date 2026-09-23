export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="footer-brand-block">
          <button className="footer-brand" onClick={() => onNavigate("home")}>
            <img
              className="brand-logo"
              src="/hopeharbor-logo.svg"
              alt="HopeHarbor logo"
            />
            <strong>HopeHarbor</strong>
          </button>
          <p>Be the first to hear how we're making a difference.</p>
        </div>
        <div className="footer-signup">
          <h2>Sign-up to our newsletter and never miss an update.</h2>
          <button
            className="signup-button"
            onClick={() => onNavigate("volunteer")}
          >
            Sign-up <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h3>Navigation</h3>
          <button onClick={() => onNavigate("home")}>Home</button>
          <button onClick={() => onNavigate("about")}>About us</button>
          <button onClick={() => onNavigate("career")}>
            Careers at HopeHarbor
          </button>
          <button onClick={() => onNavigate("volunteer")}>
            Volunteer with us
          </button>
          <button onClick={() => onNavigate("partners")}>
            Corporates &amp; partnerships
          </button>
        </div>

        <div className="footer-column">
          <h3>Other links</h3>
          <a href="#terms">Terms of service</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#legal">Legal</a>
          <a href="#faq">Frequently asked questions</a>
          <a href="#care">HopeHarbor care</a>
        </div>

        <div className="footer-column">
          <h3>Social connect</h3>
          <a href="#linkedin">LinkedIn</a>
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact us</h3>
          <a href="tel:+912240001847">+91 22 4000 1847</a>
          <a href="mailto:hello@hopeharbor.org">hello@hopeharbor.org</a>
          <p>42, Community Way, Mumbai - 400001, India</p>
        </div>
      </div>
    </footer>
  );
}
