import React from "react";

// Inline styles using a style tag for Next.js compatibility
const footerStyles = `
  /* stylelint-disable */            /* mute stylelint warnings inside this string */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap');

  .vaa-footer {
    background: #1a56b0;
    background-image: 
      radial-gradient(ellipse at 10% 50%, rgba(255,255,255,0.04) 0%, transparent 60%),
      radial-gradient(ellipse at 90% 20%, rgba(255,255,255,0.03) 0%, transparent 50%);
    font-family: 'DM Sans', sans-serif;
    color: #ffffff;
    padding: 60px 80px 0;
  }

  .vaa-footer__top {
    display: grid;
    grid-template-columns: 2fr 1fr 1.4fr 1.4fr;
    gap: 40px;
    padding-bottom: 48px;
    align-items: start;
  }

  .vaa-footer__brand {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }

  .vaa-footer__logo-wrap {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(255,255,255,0.12);
    border: 2px solid rgba(255,255,255,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
  }

  .vaa-footer__logo-img {
    width: 42px;
    height: 42px;
    object-fit: contain;
  }

  .vaa-footer__logo-placeholder {
    font-size: 22px;
  }

  .vaa-footer__brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff;
    margin: 0 0 4px;
    letter-spacing: -0.2px;
  }
  

  .vaa-footer__brand-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(255,255,255,0.65);
    margin: 0;
    letter-spacing: 0.3px;
  }

  .vaa-footer__col-title {
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.9;
  }

  .vaa-footer__nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .vaa-footer__nav li a {
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 14.5px;
    font-weight: 400;
    transition: color 0.2s ease, padding-left 0.2s ease;
    display: inline-block;
  }

  .vaa-footer__nav li a:hover {
    color: #ffffff;
    padding-left: 4px;
  }

  .vaa-footer__contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    color: rgba(255,255,255,0.8);
    font-size: 14.5px;
    font-weight: 400;
  }

  .vaa-footer__contact-item > * + * {
    /* simulate the gap between icon and text */
    margin-left: 10px;
  }

  .vaa-footer__contact-item svg {
    flex-shrink: 0;
    opacity: 0.7;
  }

  .vaa-footer__contact-item a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: color 0.2s;
  }

  .vaa-footer__contact-item a:hover {
    color: #fff;
  }

  .vaa-footer__map {
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid rgba(255,255,255,0.2);
    width: 100%;
    aspect-ratio: 16/9;
    max-height: 130px;
  }

  .vaa-footer__map iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    filter: brightness(0.9);
  }

  .vaa-footer__divider {
    height: 1px;
    background: rgba(255,255,255,0.15);
    margin: 0 0 0;
  }

  .vaa-footer__bottom {
    padding: 18px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .vaa-footer__copyright {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    margin: 0;
    font-weight: 300;
  }

  @media (max-width: 900px) {
    .vaa-footer {
      padding: 48px 32px 0;
    }
    .vaa-footer__top {
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }
    .vaa-footer__brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 560px) {
    .vaa-footer {
      padding: 40px 20px 0;
    }
    .vaa-footer__top {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .vaa-footer__brand {
      grid-column: auto;
    }
  }
  /* stylelint-enable */           /* re‑enable linting */
`;

interface FooterProps {
  logoSrc?: string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <style>{footerStyles}</style>
      <footer id="footer" className="vaa-footer" style={{ scrollMarginTop: "68px" }}>
        <div className="vaa-footer__top">
          {/* Brand */}
          <div className="vaa-footer__brand">
           <div className="vaa-footer__logo-wrap">
  <span className="vaa-footer__logo-placeholder">🎓</span>
</div>
            <div>
              <h2 className="vaa-footer__brand-name">Shree Sinheswori Secondary School</h2>
              <p className="vaa-footer__brand-sub">Makalu–5, Num, Sankhuwasabha</p>
            </div>
          </div>

          {/* Faculty Links */}
          <div>
            <p className="vaa-footer__col-title">Faculty</p>
            <ul className="vaa-footer__nav">
              {["Montessori to 10", "+2 Management"].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="vaa-footer__col-title">Contact us</p>
            <div className="vaa-footer__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:vaccollegeith@gmail.com">sujanprogrammer@gmail.com</a>
            </div>
            <div className="vaa-footer__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012.18 1h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 8.96a16 16 0 006.13 6.13l1.32-1.32a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <a href="tel:9762980864">9762980864</a>
            </div>
          </div>

          {/* Map */}
          <div>
            <p className="vaa-footer__col-title">Location</p>
            <div className="vaa-footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2218.7541626783614!2d87.2829590575809!3d27.553194231013077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e89500170b3a83%3A0x45668498abc193c4!2sNum%20phc!5e1!3m2!1sen!2snp!4v1772956903110!5m2!1sen!2snp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Singeswari Secondary School Location"
              />
            </div>
          </div>
        </div>

        <div className="vaa-footer__divider" />

        <div className="vaa-footer__bottom">
          <p className="vaa-footer__copyright">
            © {new Date().getFullYear()} Shree Sinheswori Secondary School. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;