import { Icon } from '@iconify/react';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { easeSmooth, viewportOnce } from '../lib/motionPresets';

export default function Service({ data }) {
  const { sectionHeading, allService } = data;
  return (
    <section className="section build-section" id="services">
      <div className="container">
        <SectionHeading
          variant="text-center"
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:gap-6">
          {allService?.map((item, index) => (
            <motion.article
              key={item.title}
              className="build-card group"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.48,
                ease: easeSmooth,
                delay: index * 0.07,
              }}
            >
              <div className="build-card__top">
                <div className="build-card__icon" aria-hidden>
                  <Icon icon={item.icon} className="text-2xl" />
                </div>
                <h3 className="build-card__title">{item.title}</h3>
              </div>
              <p className="build-card__desc">{item.subTitle}</p>
              {item.tags?.length > 0 && (
                <ul className="build-card__tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
