'use client';

import Link from 'next/link';
import { useState, type MouseEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/notice', label: 'Notice' },
  { href: '/admission', label: 'Admissions' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const navbarHeight = 68; // Fixed navbar height in pixels
    
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const yOffset = -navbarHeight;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -navbarHeight;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100%;
          overflow-x: hidden;
        }

        .navbar {
          background: linear-gradient(135deg, #1a4fa0 0%, #1565c0 60%, #1976d2 100%);
          box-shadow: 0 2px 20px rgba(21, 101, 192, 0.35);
          font-family: 'DM Sans', sans-serif;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 1000 !important;
        }

        .navbar__inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
          min-width: 0;
          max-width: calc(100% - 54px);
        }

        .navbar__logo-icon {
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: background 0.2s;
          flex-shrink: 0;
          overflow: hidden;
        }

        .navbar__logo-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .navbar__logo:hover .navbar__logo-icon {
          background: rgba(255,255,255,0.25);
        }

        .navbar__logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          min-width: 0;
        }

        .navbar__logo-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(12px, 1.5vw, 17px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .navbar__logo-tagline {
          font-size: clamp(9px, 1vw, 11px);
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Nav Links */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar__links a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          padding: 8px 14px;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }

        .navbar__links a:hover {
          background: rgba(255,255,255,0.14);
          color: #ffffff;
        }

        .navbar__links a.active {
          background: rgba(255,255,255,0.18);
          color: #ffffff;
          font-weight: 500;
        }

        /* CTA Button */
        .navbar__cta {
          background: #ffffff;
          color: #1565c0 !important;
          font-weight: 500 !important;
          border-radius: 6px !important;
          padding: 8px 18px !important;
          margin-left: 6px;
          transition: background 0.2s, transform 0.15s !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .navbar__cta:hover {
          background: #e3f2fd !important;
          color: #1565c0 !important;
          transform: translateY(-1px);
        }

        /* Hamburger */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: none;
          border: none;
        }

        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .navbar__hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile menu */
        .navbar__mobile {
          display: none;
          flex-direction: column;
          background: #1565c0;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 12px 20px 20px;
          gap: 4px;
        }

        .navbar__mobile a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 15px;
          padding: 10px 12px;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .navbar__mobile a:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        @media (max-width: 900px) {
          .navbar__inner { padding: 0 14px; }
          .navbar__logo { gap: 7px; max-width: calc(100% - 50px); }
          .navbar__logo-icon { width: 34px; height: 34px; }
        }

        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__hamburger { display: flex; }
          .navbar__mobile { display: flex; }

          /* keep both lines visible on mobile */
          .navbar__logo-name,
          .navbar__logo-tagline {
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
            line-height: 1.05;
          }

          .navbar__logo-name { font-size: 11px; }
          .navbar__logo-tagline { font-size: 8.5px; letter-spacing: 0.2px; }
        }

        @media (max-width: 420px) {
          .navbar__inner { padding: 0 10px; }
          .navbar__logo { gap: 6px; }
          .navbar__logo-icon { width: 30px; height: 30px; }
          .navbar__logo-name { font-size: 10px; }
          .navbar__logo-tagline { font-size: 8px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar__inner">
          {/* Logo — left */}
          <Link href="/" className="navbar__logo" onClick={handleHomeClick}>
            <div className="navbar__logo-icon">
              <img 
                src="/logo.jpg" 
                alt="School Logo" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "contain",
                  display: "block",
                  visibility: "visible"
                }} 
              />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Shree Singeswari Secondary School</span>
              <span className="navbar__logo-tagline">Num · Makalu-5 · Sankhuwasabha</span>
            </div>
          </Link>

          {/* Nav links — center/right */}
          <ul className="navbar__links">
            <li>
              <a href="/" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#course" onClick={(e) => { e.preventDefault(); scrollToSection('course'); }}>
                Course
              </a>
            </li>
            <li><Link href="/notice">Notice</Link></li>
            <li><Link href="/admission">Admissions</Link></li>
            <li>
              <a href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }} className="navbar__cta">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger — mobile */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="navbar__mobile">
            <a href="/" onClick={handleHomeClick}>
              Home
            </a>
            {navLinks.slice(1).map(({ href, label }) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
              Gallery
            </a>
            <a href="#course" onClick={(e) => { e.preventDefault(); scrollToSection('course'); }}>
              Course
            </a>
            <a href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}