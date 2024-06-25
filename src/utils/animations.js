import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWidthGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  fromTarget,
  toTarget,
  animatonProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    fromTarget,
    {
      ...animatonProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    toTarget,
    {
      ...animatonProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
