import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';
import { easeSmooth, viewportOnce } from '../lib/motionPresets';

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('image');
  const [modalData, setModalData] = useState({});
  const { sectionHeading, allProjects } = data;

  const handelProjectDetails = (item, itemType) => {
    setModalData(item);
    setModalType(itemType);
    setModal(true);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };

  const closeModal = () => setModal(false);

  const resolveLiveDemoHref = item => {
    const explicit =
      typeof item.liveDemoUrl === 'string' && item.liveDemoUrl.trim();
    if (explicit) return explicit.trim();

    const live =
      item.details?.liveUrl && String(item.details.liveUrl).trim();
    if (live) return live;

    const fallback =
      item.details?.url && String(item.details.url).trim();
    if (!fallback) return null;
    if (fallback.includes('github.com')) return null;
    return fallback;
  };

  return (
    <>
      <section className="project-section section gray-bg" id="project">
        <div className="container">
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          <motion.div
            className="full-width"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: easeSmooth, delay: 0.15 }}
          >
            <Slider {...settings} className="slider-gap-24">
              {allProjects?.map((item, index) => {
                const demoHref = resolveLiveDemoHref(item);
                return (
                  <div key={item.title ?? index} style={{ width: '416px' }}>
                    <div className="project-box project-box--slider">
                      <div className="project-media">
                        <img
                          className="project-thumb-img"
                          src={item.thumbUrl}
                          alt={item.title ? `Preview: ${item.title}` : 'Project preview'}
                          loading="lazy"
                          decoding="async"
                        />
                        <span
                          role="button"
                          tabIndex={0}
                          className="gallery-link"
                          onClick={() => handelProjectDetails(item, 'image')}
                          onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              handelProjectDetails(item, 'image');
                            }
                          }}
                        >
                          <i>
                            <Icon icon="bi:plus" />
                          </i>
                        </span>
                      </div>
                      <div className="project-body">
                        <div className="text">
                          <h5>{item.title}</h5>
                          <span>{item.subTitle}</span>
                        </div>
                        <div className="project-actions">
                          {demoHref ? (
                            <a
                              href={demoHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-link"
                              aria-label={`Live demo: ${item.title}`}
                              title="Live demo"
                            >
                              <Icon icon="mdi:open-in-new" />
                            </a>
                          ) : (
                            <span
                              className="p-link p-link--inactive"
                              aria-label="Live demo not linked yet"
                              title="Live demo not linked yet"
                            >
                              <Icon icon="mdi:open-in-new" aria-hidden />
                            </span>
                          )}
                          <span
                            role="button"
                            tabIndex={0}
                            className="p-link"
                            onClick={() =>
                              handelProjectDetails(item, 'details')
                            }
                            onKeyDown={e => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                handelProjectDetails(item, 'details');
                              }
                            }}
                            aria-label={`Project details: ${item.title}`}
                          >
                            <Icon icon="bi:arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </motion.div>
        </div>
      </section>
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={closeModal} />
            <div className="mfp-content">
              <button type="button" className="mfp-close" onClick={closeModal}>
                ×
              </button>
              {modalType === 'image' ? (
                <img
                  className="modal-project-img"
                  src={modalData.thumbUrl}
                  alt={modalData.title ? `Project: ${modalData.title}` : 'Project preview'}
                />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
          
        </div>

      )}
    </>
  );
}
