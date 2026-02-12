"use client";

import { useState, useEffect } from "react";

const DURATION_MS = 1800;
const EASING = (t: number) => 1 - Math.pow(1 - t, 3); // ease-out cubic

export const useAnimatedCounter = (target: number, enabled = true) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!enabled || target <= 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / DURATION_MS, 1);
            const eased = EASING(progress);
            const current = Math.floor(eased * target);

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const element = document.querySelector("[data-trusted-metrics]");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, enabled, hasAnimated]);

  return displayValue;
};
