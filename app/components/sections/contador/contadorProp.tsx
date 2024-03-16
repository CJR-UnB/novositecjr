import { useEffect, useRef, useState } from "react";

const Counter = ({ duration, target }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 } // Adjust the threshold as per your requirement
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count < target) {
          setCount(count + 1);
        }
      }, duration);

      return () => clearInterval(interval);
    }
  }, [isVisible, count, duration, target]);

  return (
    <div className="text-5xl font-bold mb-4" ref={counterRef}>
      {isVisible ? count : ""}
    </div>
  );
};

export default Counter;
