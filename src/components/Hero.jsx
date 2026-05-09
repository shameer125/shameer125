import { Icon } from '@iconify/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import SocialBtns from './SocialBtns';

export default function Hero({ data, socialData }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } =
    data;
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div>
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{name}</span>
              </h6>

              <h1
                className="hero-main-title"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {heading}
              </h1>
              <h2
                className="hero-type-line"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span className="hero-type-line__inner">
                  <TypeAnimation
                    sequence={typingText}
                    speed={0}
                    repeat={Infinity}
                  />
                </span>
              </h2>
              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {description}
              </p>
              <div
                className="btn-bar flex flex-col sm:flex-row sm:items-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn"
                >
                  <span>{btnText}</span>{' '}
                  <i className="flex">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
                <SocialBtns
                  socialBtns={socialData}
                  className="pt-4 sm:justify-start sm:!pt-0 sm:!pl-6"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="hs-banner">
              <img src={imgUrl} alt="Admin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
