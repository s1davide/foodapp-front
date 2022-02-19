/**
 * Animations to add in className
 */
const animations = {
  fadeIn: (duration='250ms')=>({ animation: `inAnimation ${duration} ease-in` }),
  fadeOut: (duration='270ms')=>({
    animation: `outAnimation ${duration} ease-out`,
    animationFillMode: "forwards",
  }),
};

export default animations;
