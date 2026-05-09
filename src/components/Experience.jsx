import React from 'react';
import SectionHeading from './SectionHeading';

export default function Experience({ data }) {
  const { sectionHeading, allExperience } = data;

  return (
    <section className="section gray-bg">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="flex flex-col gap-y-4">
          {allExperience?.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="ex-box">
                <div className="grid grid-cols-1 gap-y-6 md:grid-cols-12 md:gap-y-6">
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="ex-left">
                      <h4>{item.designation}</h4>
                      <span>{item.company}</span>
                      <p>{item.duration}</p>
                      <label>{item.jobType}</label>
                    </div>
                  </div>
                  <div className="md:col-span-8 lg:col-span-9">
                    <div className="ex-right">
                      <h5>{item.companyTitle}</h5>
                      <p className="m-0">{item.companyDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
