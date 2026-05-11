import React from 'react';
import { motion } from 'framer-motion';
import parser from 'html-react-parser';
import {
  easeSmooth,
  fadeRightVariants,
  fadeUpVariants,
  viewportOnce,
} from '../lib/motionPresets';

export default function SectionHeading({ miniTitle, title, variant }) {
  const centered = variant === 'text-center';
  const h6Motion = {
    variants: centered ? fadeUpVariants : fadeRightVariants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportOnce,
  };

  return (
    <div className={`section-heading${centered ? ' text-center' : ''}`}>
      <motion.h6 {...h6Motion}>
        <span>{miniTitle}</span>
      </motion.h6>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.52, ease: easeSmooth, delay: 0.12 }}
      >
        {parser(title)}
      </motion.h2>
    </div>
  );
}
