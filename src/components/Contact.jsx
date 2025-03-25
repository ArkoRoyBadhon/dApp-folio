import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";
import GithubIcon from "../icons/GithubIcon";
import LinkedIcon from "../icons/LinkedIcon";
import EmailIcon from "../icons/EmailIcon";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    if (!contactRef.current || !formRef.current || !socialRef.current) return;

    gsap.set([contactRef.current, formRef.current, socialRef.current], {
      opacity: 0,
      y: 50,
    });

    // Contact Section Animation
    gsap.to(contactRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Form Section Animation
    gsap.to(formRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Social Media Section Animation
    gsap.to(socialRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: socialRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-900 min-h-screen">
      <div className="container w-full lg:w-[80%] mx-auto px-4 text-gray-300">
        <div ref={contactRef} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Form and Social Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div ref={formRef} className="bg-[#060606] p-8 max-w-[800px] rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <AnimatedButton classNames="w-full text-white py-3 px-6 rounded-lg transition duration-300 animate-pulse">
                Send Message
              </AnimatedButton>
            </form>
          </div>

          <div ref={socialRef} className="bg-[#060606]  p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">
            Support Me with a Donation
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Your support helps me keep building amazing projects! You can donate ETH directly to my wallet.
          </p>

          <div className="space-y-4">
            <input
              // value={donationAmount}
              // defaultValue={20}
              // onChange={(e) => setDonationAmount(e.target.value)}
              type="number"
              placeholder="Enter amount in ETH"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <AnimatedButton onClick={() => alert("Handle donation here")} classNames="w-full text-white py-3 px-6 rounded-lg transition duration-300 animate-pulse">
                Donate Now
              </AnimatedButton>
          </div>

          {/* Social Media Links Section */}
          <div className="mt-6 space-y-4">
            <a
              href="https://github.com/arkoRoyBadhon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-200 hover:text-blue-500 transition duration-300"
            >
              <GithubIcon />
              <span className="text-lg">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arko-roy-badhon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-200 hover:text-blue-500 transition duration-300"
            >
              <LinkedIcon />
              <span className="text-lg">LinkedIn</span>
            </a>
            <a
              href="mailto:arkoroyb@gmail.com"
              className="flex items-center space-x-4 text-gray-200 hover:text-blue-500 transition duration-300"
            >
              <EmailIcon />
              <span className="text-lg">Email</span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
