import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../ContextApi";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const skillBarsRef = useRef([]);
  const { contract } = useAppContext();
  const [skillsData, setSkillsData] = useState([]);

  const loadSkills = async () => {
    try {
      if (contract) {
        const rawSkills = await contract.getAllSkills();
        const formattedSkills = rawSkills.map((exp) => ({
          id: exp[0].toString(),
          title: exp[1],
          level: exp[2],
        }));
        setSkillsData(formattedSkills);
      }
    } catch (error) {
      console.error("Error fetching skills: ", error);
    }
  };

  useEffect(() => {
    loadSkills();
  }, [contract]);

  useEffect(() => {
    if (!skillsRef.current || skillsData.length === 0) return;

    // Set initial state for skill bars
    gsap.set(skillBarsRef.current, { width: 0 });

    // Animation for the Skills section
    gsap.to(skillsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Animation for each skill bar
    skillBarsRef.current.forEach((bar, index) => {
      gsap.to(bar, {
        width: `${skillsData[index]?.level}%`,
        duration: 1.5,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: bar,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
    });
  }, [skillsData]);

  return (
    <section id="skills" className="py-20 text-white">
      <div className="container w-full lg:w-[80%] mx-auto px-4">
        {/* Skills Section Heading */}
        <div ref={skillsRef} className="text-center mb-16 opacity-0 translate-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies I work with and my proficiency in each.
          </p>
        </div>

        {/* Skills List */}
        <div className="space-y-8">
          {skillsData.map((skill, index) => (
            <div key={skill.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{skill.title}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  ref={(el) => (skillBarsRef.current[index] = el)}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  aria-label={`${skill.title} skill level: ${skill.level}%`}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
