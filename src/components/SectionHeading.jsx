import React from 'react';
import parser from 'html-react-parser';

export default function SectionHeading({ miniTitle, title, variant }) {
  const centered = variant === 'text-center';
  return (
    <div
      className={`section-heading${centered ? ' text-center' : ''}`}
    >
      <h6
        data-aos={centered ? 'fade-up' : 'fade-right'}
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <span>{miniTitle}</span>
      </h6>
      <h2>{parser(title)}</h2>
    </div>
  );
}
