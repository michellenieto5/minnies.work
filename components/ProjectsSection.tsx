// components/ProjectsSection.tsx
// components/ProjectsSection.tsx
'use client'; // Mark this file as a client component
import { useState } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projects = {
  sourceTravel: {
    title: "Source Travel App",
    description: "A full-stack travel planner with map integration and social features.",
    images: ["/images/map.png", "/images/login.png", "/images/OSU.png"],
    repo: "https://github.com/Crowd-Sourced-Travel-Planner/Crowd-Sourced-Travel-Planner",
    demo: "https://travel-planner.osu.eschers.work",
  },
  dawd: {
    title: "DVWA - Damn Vulnerable Web Application",
    description: "Damn Vulnerable Web Application (DVWA) is a PHP/MariaDB web application that is damn vulnerable. Its main goal is to be an aid for security professionals to test their skills and tools in a legal environment, help web developers better understand the processes of securing web applications and to aid both students & teachers to learn about web application security in a controlled class room environment.",
    images: ["/images/dvwa.png"],
    repo: "https://github.com/michellenieto5/DVWA-report",
  },
  dentalApp: {
    title: "Dental WebApp",
    description: "Built for a local clinic to manage appointments, patients, and reports.",
    images: ["/images/adminDental.png"],
    repo: "https://github.com/michellenieto5/CS-340-Project",
  },
  budgetApp: {
    title: "BudgetApp",
    description: "An app to track income and expenses with category breakdowns and graphs.",
    images: [],
    repo: "https://github.com/michellenieto5/BudgetApp",
  },
};

export default function ProjectsSection() {
  const [selected, setSelected] = useState("budgetApp");

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-start text-center px-20 py-40">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-8">Projects</h2>

      {/* Project Navbar */}
      <div className="flex flex-column justify-left gap-6 mb-10">
        {Object.entries(projects).map(([key, project]) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all
              ${selected === key ? "bg-black text-white dark:bg-white dark:text-black" : "hover:underline"}`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Project Content */}
      <div className="max-w-xl text-center">
      <h3 className="text-2xl font-semibold mb-2">{projects[selected as keyof typeof projects].title}</h3>
      <p className="text-lg text-gray-700 dark:text-gray-300">{projects[selected as keyof typeof projects].description}</p>
      <Swiper spaceBetween={20} slidesPerView={1} className="mt-8">
        {projects[selected as keyof typeof projects].images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`${projects[selected as keyof typeof projects].title} screenshot ${idx + 1}`}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="flex justify-center gap-6 mt-6">
        {/* Repo link (always shown if exists) */}
        {projects[selected as keyof typeof projects].repo && (
          <a
            href={projects[selected as keyof typeof projects].repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            GitHub Repo →
          </a>
        )}

        {/* Live demo link (only shown if exists) */}
        {projects[selected as keyof typeof projects].demo && (
          <a
            href={projects[selected as keyof typeof projects].demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
      </div>
    </section>
  );
}

  