import { Icon } from '@iconify/react';
import React from 'react';
import { motion } from 'framer-motion';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';
import {
  easeSmooth,
  fadeRightVariants,
  fadeVariants,
  viewportOnce,
} from '../lib/motionPresets';

export default function About({ data }) {
  const { imgSrc, miniTitle, title, description, funfacts, btnText, btnUrl } =
    data;
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="effect-1">
          <motion.img
            src="/assets/images/effect-1.svg"
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: easeSmooth, delay: 0.22 }}
          />
        </div>
        <div className="effect-2">
          <motion.img
            src="/assets/images/effect-2.svg"
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: easeSmooth, delay: 0.12 }}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-12">
          <motion.div
            className="w-full max-w-full text-center lg:w-1/2 xl:w-[41.666667%]"
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="about-banner about-visual text-center">
              <img
                className="about-visual__photo"
                src={imgSrc}
                alt="Shameer Ali — portrait"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
          <div className="w-full max-w-full px-0 lg:px-12 lg:w-1/2 xl:w-[41.666667%]">
            <motion.div
              className="about-text"
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="section-heading">
                {miniTitle && (
                  <h6>
                    <span>{miniTitle}</span>
                  </h6>
                )}
                {title && <h2>{parser(title)}</h2>}
              </div>
              <p>{description}</p>
              <div className="review-box">
                {funfacts?.map((item, index) => (
                  <div className="r-box" key={index}>
                    <h3>
                      {item.number}
                      <span>+</span>
                    </h3>
                    <label>{item.title}</label>
                  </div>
                ))}
              </div>
              <div className="btn-bar">
                {btnUrl && btnText ? (
                  <ScrollLink
                    to={btnUrl}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={300}
                    className="px-btn"
                  >
                    <span>{btnText}</span>{' '}
                    <i>
                      <Icon icon="bi:arrow-right" />
                    </i>
                  </ScrollLink>
                ) : null}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
