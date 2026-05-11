import { Icon } from '@iconify/react';
import React from 'react';

function ChannelLink({
  title,
  value,
  href,
  external,
  arrowIcon = 'bi:arrow-up-right',
  download,
}) {
  const openNewTab =
    external !== undefined
      ? external
      : /^https?:\/\//i.test(href ?? '');
  const content = (
    <>
      <span className="contact-prof-channel__body">
        <span className="contact-prof-channel__label">{title}</span>
        <span className="contact-prof-channel__value">{value}</span>
      </span>
      <Icon icon={arrowIcon} className="contact-prof-channel__arrow" aria-hidden />
    </>
  );

  const linkProps = {};
  if (openNewTab) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }
  if (download) {
    linkProps.download =
      typeof download === 'string' ? download : '';
  }

  return (
    <a className="contact-prof-channel" href={href} {...linkProps}>
      {content}
    </a>
  );
}

export default function ContactInfo({ contactInfoData }) {
  return (
    <div className="contact-prof-channels" role="list">
      {contactInfoData.map((item, index) => {
        const key = item.href ?? item.email ?? item.tel ?? `channel-${index}`;
        if (item.email) {
          return (
            <div className="contact-prof-channels__row" role="listitem" key={key}>
              <ChannelLink
                title={item.title}
                value={item.email}
                href={`mailto:${item.email}`}
                external={false}
                arrowIcon="bi:envelope"
              />
            </div>
          );
        }
        if (item.tel) {
          return (
            <div className="contact-prof-channels__row" role="listitem" key={key}>
              <ChannelLink
                title={item.title}
                value={item.tel}
                href={`tel:${item.tel}`}
                external={false}
                arrowIcon="bi:telephone-outbound"
              />
            </div>
          );
        }
        if (item.href) {
          const display =
            item.linkText ?? item.href.replace(/^https?:\/\//, '');
          return (
            <div className="contact-prof-channels__row" role="listitem" key={key}>
              <ChannelLink
                title={item.title}
                value={display}
                href={item.href}
                external={item.external}
                download={item.download}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
