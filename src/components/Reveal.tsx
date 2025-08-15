import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface RevealProps {
  className?: string;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
}

// Smooth reveal on scroll using IntersectionObserver
const Reveal = ({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
}: PropsWithChildren<RevealProps>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${Math.max(0, delayMs)}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;


