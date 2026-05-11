import React from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../lib/motionPresets';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.45 }}
    >
      <div className="container">
        <p className="m-0 text-center">
          © {new Date().getFullYear()} Shameer Ali. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
