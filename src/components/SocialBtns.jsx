import { Icon } from '@iconify/react';
import React from 'react';

export default function SocialBtns({ className = '', socialBtns }) {
  return (
    <div
      className={`social-icon flex justify-center ${className}`}
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="300"
    >
      {socialBtns?.map((item, index) => (
        <a
          className={item.iconBgClass}
          href={item.href}
          key={index}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon={item.icon} />
        </a>
      ))}
    </div>
  );
}
