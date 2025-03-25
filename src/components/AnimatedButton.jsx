import React, { useRef } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon

const AnimatedButton = ({
  children,
  onClick,
  classNames = "",
  hoverAnimation = true,
  showArrow = false, // Prop to show/hide the arrow icon
}) => {
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  // Hover animation
  const handleHover = () => {
    if (!hoverAnimation || !buttonRef.current || !arrowRef.current) return;

    // Animate the button and arrow on hover
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(arrowRef.current, {
      x: 10, // Move the arrow to the right
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Reset animation on hover out
  const handleHoverOut = () => {
    if (!hoverAnimation || !buttonRef.current || !arrowRef.current) return;

    // Reset the button and arrow
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(arrowRef.current, {
      x: 0, 
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className={`px-6 py-3  rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${classNames}`}
    >
      {children}
      {showArrow && (
        <span ref={arrowRef}>
          <FaArrowRight className="text-sm" />
        </span>
      )}
    </button>
  );
};

export default AnimatedButton;