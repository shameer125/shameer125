import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import { easeSmooth, viewportOnce } from '../lib/motionPresets';

export default function Contact({ data }) {
  const { sectionHeading, contactInfo } = data;

  return (
    <section id="contactus" className="section contact-prof">
      <div className="container">
        <motion.header
          className="contact-prof__header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.52, ease: easeSmooth }}
        >
          <p className="contact-prof__eyebrow">Get in touch</p>
          <h2 className="contact-prof__title">{sectionHeading.title}</h2>
          <p className="contact-prof__lead">{sectionHeading.subTitle}</p>
        </motion.header>

        <motion.div
          className="contact-prof__surface"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.52, ease: easeSmooth, delay: 0.1 }}
        >
          <div className="contact-prof__grid">
            <motion.aside
              className="contact-prof__aside"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeSmooth, delay: 0.12 }}
            >
              <ContactInfo contactInfoData={contactInfo} />
            </motion.aside>

            <motion.div
              className="contact-prof__form-column"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: easeSmooth, delay: 0.18 }}
            >
              <div className="contact-prof__form-panel">
                <h3 className="contact-prof__form-title">Send a message</h3>
                <p className="contact-prof__form-hint">
                  I typically reply within one to two working days.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
