import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About Me', to: 'about' },
  { label: 'Projects', to: 'project' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contactus' },
];

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`header-top-fixed${mobileToggle ? ' menu-open' : ''}${scrolled ? ' fixed-header' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <Link className="navbar-brand inline-block" to="/">
            <img
              className="logo-light max-w-none"
              alt="Logo"
              src="/assets/images/logo-light.svg"
            />
          </Link>
        </div>
        <ul className={`main-menu whitespace-nowrap min-w-fit !flex transition-all duration-300 ease-in-out lg:!opacity-100 lg:!translate-y-0 lg:!pointer-events-auto ${mobileToggle ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="flex">
          <ScrollLink
            to="contactus"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileToggle(false)}
            className="px-btn !hidden lg:!inline-flex whitespace-nowrap min-w-fit"
          >
            Let's Talk
          </ScrollLink>
          <button
            type="button"
            aria-label="Open menu"
            className="toggler-menu lg:hidden"
            onClick={() => setMobileToggle(!mobileToggle)}
          >
            <span />
          </button>
        </div>
      </div>
    </div>
  );
}
