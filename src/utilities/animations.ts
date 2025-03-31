export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.6,
    },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.65,
      delay: 0,
    },
  },
}

export const float = {
  hidden: { opacity: 0, scaleX: 1.03 },
  show: {
    willChange: 'opacity, transform',
    opacity: 1,
    scaleX: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.9,
    },
  },
}

export const staggerContainer = {
  show: {
    transition: {
      willChange: 'opacity, transform',
      staggerChildren: 0.1,
    },
  },
}

// Variant with reverse stagger (for Split component)
export const reverseStaggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
}

// Continuous rotation animations
export const rotateClockwise = {
  animate: {
    rotate: 360,
    transition: {
      duration: 120,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
}

export const rotateCounterClockwise = {
  animate: {
    rotate: -360,
    transition: {
      duration: 120,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
}
