import React from 'react';

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <div className="section-title">
            <span className="section-number">05 Contact</span>
            <h2>Contact</h2>
          </div>
        </div>

        <div className="contact-inner">
          <p className="contact-sub">お仕事のご依頼・ご相談はお気軽にご連絡ください</p>
          <div className="contact-links">
            <a
              href="mailto:mitsuo.koizumi@kronoworks.biz"
              className="contact-link"
              aria-label="Email"
            >
              <span className="contact-link-icon"><EmailIcon /></span>
              <span className="contact-link-label">mitsuo.koizumi@kronoworks.biz</span>
            </a>
            <a
              href="https://www.instagram.com/m.koi_photo/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="Instagram"
            >
              <span className="contact-link-icon"><InstagramIcon /></span>
              <span className="contact-link-label">@m.koi_photo</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2025 M.Koizumi. All rights reserved.</span>
        <span>Nara, Japan</span>
      </footer>
    </>
  );
};

export default Footer;
