import { Icon } from '@iconify/react';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import SocialBtns from './SocialBtns';
import {
  easeSmooth,
  fadeUpVariants,
  heroStaggerParent,
} from '../lib/motionPresets';

export default function Hero({ data, socialData }) {
  const { imgUrl, heading, typingText, description, btnText, btnUrl } = data;
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div>
            <motion.div
              className="hs-text-box"
              variants={heroStaggerParent}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 className="hero-main-title" variants={fadeUpVariants}>
                {heading}
              </motion.h1>
              <motion.h2 className="hero-type-line" variants={fadeUpVariants}>
                <span className="hero-type-line__inner">
                  <TypeAnimation
                    sequence={typingText}
                    speed={0}
                    repeat={Infinity}
                  />
                </span>
              </motion.h2>
              <motion.p className="text" variants={fadeUpVariants}>
                {description}
              </motion.p>
              <motion.div
                className="btn-bar flex flex-col sm:flex-row sm:items-center"
                variants={fadeUpVariants}
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
                  disableMotion
                />
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="hs-banner hero-visual"
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease: easeSmooth, delay: 0.08 }}
            >
              <img
                className="hero-visual__photo"
                src={imgUrl}
                alt="Shameer Ali — MERN stack developer"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
