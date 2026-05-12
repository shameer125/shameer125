import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { easeSmooth, viewportOnce } from '../lib/motionPresets';

/** MERN stack logos live in /public/assets/tech/ (devicons). */
export default function MernTech({ data }) {
  const { sectionHeading, items } = data;
  const intro = sectionHeading?.intro ?? '';

  return (
    <section className="section mern-tech" id="mern-tech">
      <div className="container">
        <div className="mern-tech__head">
          <SectionHeading
            variant="text-center"
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          {intro ? (
            <motion.p
              className="mern-tech__intro"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeSmooth, delay: 0.08 }}
            >
              {intro}
            </motion.p>
          ) : null}
        </div>

        <ul className="mern-tech__grid">
          {items?.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.5,
                ease: easeSmooth,
                delay: index * 0.08,
              }}
            >
              <article
                className={`mern-tech-card group${item.invertLogo ? ' mern-tech-card--invert-logo' : ''}`}
              >
                <div className="mern-tech-card__glow" aria-hidden />
                <div className="mern-tech-card__logo-wrap">
                  <img
                    className="mern-tech-card__logo"
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={72}
                    height={72}
                  />
                </div>

                <h3 className="mern-tech-card__name">{item.name}</h3>
                <p className="mern-tech-card__role">{item.role}</p>
                <p className="mern-tech-card__blurb">{item.blurb}</p>
              </article>

            </motion.li>
          ))}
        </ul>
      </div>
      
    </section>
  );
}
