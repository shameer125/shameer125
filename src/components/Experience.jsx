import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { easeSmooth, viewportOnce } from '../lib/motionPresets';

export default function Experience({ data }) {
  const { sectionHeading, allExperience } = data;

  return (
    <section className="section gray-bg edu-section" id="education">
      <div className="container">
        <SectionHeading
          variant="text-center"
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <ol className="edu-timeline mx-auto max-w-3xl list-none px-0">
          {allExperience?.map((item, index) => {
            const isCurrent =
              item.status?.toLowerCase() === 'pursuing' || item.highlight;
            return (
              <motion.li
                key={item.program ?? index}
                className="edu-timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.48,
                  ease: easeSmooth,
                  delay: index * 0.09,
                }}
              >
                <span className="edu-timeline-item__rail" aria-hidden />
                <article
                  className={`edu-card group${isCurrent ? ' edu-card--current' : ''}`}
                >
                  <div className="edu-card__toolbar">
                    <span
                      className={
                        isCurrent
                          ? 'edu-card__status edu-card__status--active'
                          : 'edu-card__status edu-card__status--past'
                      }
                    >
                      {item.status}
                    </span>
                    <span className="edu-card__period">{item.period}</span>
                  </div>
                  <h3 className="edu-card__degree">{item.program}</h3>
                  <p className="edu-card__where">
                    <span className="edu-card__institution">
                      {item.institution}
                    </span>
                    <span className="edu-card__sep" aria-hidden>
                      {' '}
                      |{' '}
                    </span>
                    <span className="edu-card__location">{item.location}</span>
                  </p>
                  {item.notes ? (
                    <p className="edu-card__notes">{item.notes}</p>
                  ) : null}
                </article>
              </motion.li>
            );
          })}
        </ol>

      </div>
      
    </section>
  );
}
