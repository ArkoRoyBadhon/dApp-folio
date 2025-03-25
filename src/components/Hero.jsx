import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";
import SolidityIcon from "../icons/SolidityIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedIcon from "../icons/LinkedIcon";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const hiTextRef = useRef(null);
  const nameTextRef = useRef(null);
  const professionTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (
      !heroRef.current ||
      !hiTextRef.current ||
      !nameTextRef.current ||
      !professionTextRef.current ||
      !buttonRef.current
    )
      return;

    // Animation for "Hi!"
    gsap.fromTo(
      hiTextRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    // Animation for "I am Arko Roy Badhon"
    gsap.fromTo(
      nameTextRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.8,
      }
    );

    // Animation for "a full stack web developer"
    gsap.fromTo(
      professionTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.5,
      }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 2,
      }
    );

    // Parallax effect for the background
    gsap.to(heroRef.current, {
      backgroundPositionY: "20%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="absolute top-[70%] lg:top-[60%] left-[10%] lg:left-[20%] z-[1111]  w-[48px] h-[48px]" >
        <SolidityIcon />
      </div>
      <div className="absolute top-[20%] right-[20%] z-[1111] w-[48px] h-[48px] animate- " style={{animationDuration: "2s"}}>
        <img src="/image/nextjs.svg" alt="" />
      </div>
      <div className="absolute top-[15%] left-[20%] lg:left-[40%] z-[1111]  w-[48px] h-[48px]">
        <img src="/image/icons8-ethereum-48.png" alt="" />
      </div>
      <div className="absolute top-[70%] right-[30%] z-[1111] animate-spin-slow w-[48px] h-[48px]">
        <img src="/image/icons8-react-js-80.png" alt="" />
      </div>

      {/* text animation  */}
      <div className="absolute z-[99] text-center">
        <h1
          ref={hiTextRef}
          className="text-5xl md:text-6xl font-bold mb-4 text-blue-500"
        >
          Hi!
        </h1>
        <h2
          ref={nameTextRef}
          className="text-4xl md:text-5xl font-bold mb-4 text-green-500 animate-text-glow"
        >
          I am Arko Roy Badhon
        </h2>
        <p
          ref={professionTextRef}
          className="text-2xl md:text-3xl mb-8 text-gray-300 animate-text-glow p-2 rounded-lg uppercase"
        >
          a full stack Blockchain developer
        </p>
        <div
          ref={buttonRef}
          className="mx-auto flex justify-center items-center gap-5"
        >
          <AnimatedButton
            classNames=" animate-pulse"
            showArrow={true}
          >
            <a
              href="https://github.com/arkoRoyBadhon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-200 hover:text-blue-500 transition duration-300"
            >
              <GithubIcon />
              <span className="text-lg">GitHub</span>
            </a>
          </AnimatedButton>
          <AnimatedButton
            classNames="animate-pulse"
            showArrow={true}
          >
            <a
              href="https://www.linkedin.com/in/arko-roy-badhon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-200 hover:text-blue-500 transition duration-300"
            >
              <LinkedIcon />
              <span className="text-lg">LinkedIn</span>
            </a>
          </AnimatedButton>
        </div>
      </div>
      <div className=" h-[100%] w-[100%] mx-auto flex items-center justify-center z-10">
        <img
          src="/image/hero-bg-1.svg"
          className="absolute top-0 left-0 w-full h-full object-cover animate-spin-slow filter brightness-25"
          alt="Hero Background 1"
        />
        <img
          src="/image/hero-bg-1.svg"
          className="absolute top-0 left-0 w-full h-full animate-spin-slow filter brightness-25"
          alt="Hero Background 1"
        />
        <img
          src="/image/hero-bg-2.svg"
          className="absolute top-0 left-0 w-full h-full animate-spin-slow filter brightness-25"
          alt="Hero Background 2"
        />
        <img
          src="/image/hero-bg-2.svg"
          className="absolute top-0 left-0 w-full h-full object-cover animate-spin-slow filter brightness-25"
          alt="Hero Background 2"
        />
      </div>
      <div className="z-[1000] custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
