import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";
import { useAppContext } from "../ContextApi";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectsRef = useRef(null);
  const { contract } = useAppContext();
  const [projectsData, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      if (!contract) return;
      const rawProjects = await contract.getProjects();
      console.log("Fetched Projects:", rawProjects);

      const formattedProjects = rawProjects.map((project) => ({
        id: project[0].toString(),
        title: project[1],
        description: project[2],
        image: project[3],
        github: project[4],
        tech: project[5], // this is an array
      }));
      setProjects(formattedProjects);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, [contract]);

  useEffect(() => {
    const projects = projectsRef.current;

    if (!projects || !projectsData.length) return;

    const projectsWidth = projects.scrollWidth;
    const scrollAmount = -(projectsWidth - window.innerWidth + 800);

    const tween = gsap.to(projects, {
      x: scrollAmount,
      duration: 3,
      ease: "none",
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".projects-wrapper",
      start: "top 10%",
      end: `+=${-scrollAmount}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    return () => {
      tween.kill();
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projectsData]);

  return (
    <div className="projects-wrapper h-fit lg:h-screen overflow-hidden bg-gray-9 w-full">
      <div className="w-[80%] mx-auto">
        <h2 className="text-[40px] text-gray-300 font-semibold text-center py-5">
          My Top Projects
        </h2>
        <div
          ref={projectsRef}
          className="projects flex flex-nowrap gap-8 w-fit mx-auto space-x-4"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project flex-shrink-0 h-[550px] w-[90vw] md:w-[70vw] lg:w-[800px] xl:w-[1200px] flex items-center justify-center relative overflow-hidden rounded-2xl mx-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full h-[220px] lg:h-[340px] opacity-90 backdrop-blur-3xl bg-gray-900 rounded-t-2xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 py-10 px-[40px] lg:px-[120px]">
                <h2 className="text-[24px] lg:text-[52px] font-bold text-gray-300 line-clamp-1">
                  {project.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-4">
                  <div className="flex gap-4 h-fit mb-4">
                    <AnimatedButton
                      classNames="text-gray-600 text-[12px] lg:text-[18px] h-fit animate-pulse"
                      showArrow={true}
                    >
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                        Github
                      </a>
                    </AnimatedButton>
                    <AnimatedButton
                      classNames="text-[12px] lg:text-[18px] h-fit whitespace-nowrap animate-pulse"
                      showArrow={true}
                    >
                      Live link
                    </AnimatedButton>
                  </div>
                  <div>
                    <p className="text-[12px] lg:text-[24px] text-gray-400 font-semibold">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="py-4 text-[18px] lg:text-[24px] font-semibold text-gray-300">
                      Technology:
                    </h5>
                    {project.tech && project.tech.map((tech, techIndex) => (
                      <p
                        key={techIndex}
                        className="text-bold text-[18px] rounded-4xl bg-amber-400 px-6 py-2 text-green-800"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;