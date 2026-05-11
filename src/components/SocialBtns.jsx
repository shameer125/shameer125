import { Icon } from '@iconify/react';
import React from 'react';
import { motion } from 'framer-motion';
import { easeSmooth } from '../lib/motionPresets';

export default function SocialBtns({
  className = '',
  socialBtns,
  disableMotion = false,
}) {
  const linkPropsFor = item => {
    const href = item.href ?? '';
    const isHttp = /^https?:\/\//i.test(href);
    const openNewTab =
      item.newTab !== false && (item.newTab === true || isHttp);
    const base = {};
    if (openNewTab) {
      base.target = '_blank';
      base.rel = 'noopener noreferrer';
    }
    if (item.download) {
      base.download =
        typeof item.download === 'string' ? item.download : true;
    }
    return base;
  };

  const inner = (
    <>
      {socialBtns?.map((item, index) => (
        <a
          className={item.iconBgClass}
          href={item.href}
          key={`${item.href}-${index}`}
          {...linkPropsFor(item)}
        >
          <Icon icon={item.icon} />
        </a>
      ))}
    </>
  );

  if (disableMotion) {
    return (
      <div className={`social-icon flex justify-center ${className}`}>{inner}</div>
    );
  }

  return (
    <motion.div
      className={`social-icon flex justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: easeSmooth, delay: 0.28 }}
    >
      {inner}
    </motion.div>
  );
}
