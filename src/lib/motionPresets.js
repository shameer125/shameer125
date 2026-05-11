/** Shared Framer Motion settings — scroll-triggered once, eased. */
export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -40px 0px',
};

export const easeSmooth = [0.22, 1, 0.36, 1];

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeSmooth },
  },
};

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeSmooth },
  },
};

export const fadeRightVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.52, ease: easeSmooth },
  },
};


export const heroStaggerParent = {  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};
