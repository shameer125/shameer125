import React from 'react';
import SocialBtns from './SocialBtns';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact({ data, socialData }) {
  const { sectionHeading, contactImg, contactInfo } = data;
  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box gray-bg overflow-hidden rounded-md">
          <div className="grid grid-cols-1 gap-0 p-4 lg:grid-cols-12 lg:p-12">
            <div className="hidden lg:col-span-4 lg:block" aria-hidden />
            <div className="lg:col-span-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5>{sectionHeading.title}</h5>
                <p className="m-0">{sectionHeading.subTitle}</p>
              </div>
            </div>
          </div>
          <div className="contactus-form flex flex-col gap-0 p-4 lg:flex-row lg:flex-row-reverse lg:flex-wrap lg:p-12">
            <div className="w-full lg:w-2/3">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
            <div className="w-full pe-0 md:pe-12 lg:w-1/3 lg:max-w-none">
              <div className="contact-banner hidden lg:block">
                <img src={contactImg} alt="Contact" />
              </div>
              <ContactInfo contactInfoData={contactInfo} />
              <SocialBtns socialBtns={socialData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
