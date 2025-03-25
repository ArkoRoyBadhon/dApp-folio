import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../ContextApi";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRefs = useRef([]);
  const experienceRefs = useRef([]);
  const educationRefs = useRef([]);

  const { contract } = useAppContext();
  const [experienceData, setExperience] = useState([]);
  const [educationData, setEducation] = useState([]);

  const loadExperience = async () => {
    try {
      if (contract) {
        const rawExperience = await contract.getWorkExperience();

        const formattedExperience = rawExperience.map((exp) => ({
          id: exp[0].toString(),
          title: exp[2],
          period: exp[1],
          speciality: exp[3],
          company: exp[4],
        }));
        setExperience(formattedExperience);
      }
    } catch (error) {
      console.error("Error fetching experience: ", error);
    }
  };

  const loadEducation = async () => {
    try {
      if (contract) {
        const rawEducations = await contract.getEducation();

        const formattedEducations = rawEducations.map((edu) => ({
          id: edu[0].toString(),
          degree: edu[2],
          period: edu[1],
          focus: edu[3],
          institute: edu[4],
        }));
        setEducation(formattedEducations);
      }
    } catch (error) {
      console.error("Error fetching education: ", error);
    }
  };

  useEffect(() => {
    loadExperience();
    loadEducation();
  }, [contract]);

  useEffect(() => {
    const animateCards = () => {
      const allRefs = [...sectionRefs.current, ...experienceRefs.current, ...educationRefs.current];

      // Set initial state
      gsap.set(allRefs, { opacity: 0, y: 50 });

      // Create animations
      allRefs.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          });
        }
      });

      ScrollTrigger.refresh(); 
    };

    animateCards();
  }, [experienceData, educationData]);

  return (
    <section id="about" className="py-20 overflow-hidden text-white">
      <div className="container w-full lg:w-[80%] mx-auto px-4">
        {/* About Section */}
        <div ref={(el) => (sectionRefs.current[0] = el)} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Hi, I'm Arko Roy Badhon, a passionate full-stack web developer with expertise in building modern, scalable,
            and user-friendly web applications. I love turning ideas into reality through code.
          </p>
        </div>

        {/* Experience Section */}
        <div ref={(el) => (sectionRefs.current[1] = el)} className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8">Experience</h3>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (experienceRefs.current[index] = el)}
                className="bg-gray-200 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
              >
                <h4 className="text-2xl font-semibold text-gray-900">{exp.title}</h4>
                <p className="text-lg text-gray-700 mt-2">
                  {exp.company}, {exp.period}
                </p>
                <p className="text-gray-600 mt-2">{exp.speciality}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div ref={(el) => (sectionRefs.current[2] = el)} className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8">Education</h3>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                ref={(el) => (educationRefs.current[index] = el)}
                className="bg-gray-200 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
              >
                <h4 className="text-2xl font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-lg text-gray-700 mt-2">
                  {edu.institute}, {edu.period}
                </p>
                <p className="text-gray-600 mt-2">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
