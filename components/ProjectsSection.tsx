// components/ProjectsSection.tsx
// components/ProjectsSection.tsx
'use client'; // Mark this file as a client component
import { useState } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Project = {
  title: string;
  description?: string;     // short summary 
  highlights?: string[];    // bullet points
  images: string[];
  repo?: string;
  demo?: string;
};

const projects = {
  sourceTravel: {
    title: "Source Travel App",
    description: "A full-stack travel planner with map integration and social features.",
    highlights: [],
    images: ["/images/map.png", "/images/login.png", "/images/OSU.png"],
    repo: "https://github.com/Crowd-Sourced-Travel-Planner/Crowd-Sourced-Travel-Planner",
    demo: "https://travel-planner.osu.eschers.work",
  },
  dawd: {
    title: "DVWA - Damn Vulnerable Web Application",
    description: "Damn Vulnerable Web Application (DVWA) is a PHP/MariaDB web application that is damn vulnerable. Its main goal is to be an aid for security professionals to test their skills and tools in a legal environment, help web developers better understand the processes of securing web applications and to aid both students & teachers to learn about web application security in a controlled class room environment.",
    highlights: [
      "Set up a virtual lab using Kali Linux, VMware, DVWA, MySQL, and tools like Burp Suite and ProxyFox to perform controlled penetration testing.",
      "Exploded common web vulnerabilities including Brute Force, Command Injection, CSRF and File Inclusion.", 
      "Identified root causes for each exploit and mapped each vulnerability to the OWASP Top 10, including Broken Authentication, Command Injection, CSRF, and Insecure Design.",
    ],
    images: ["/images/dvwa.png"],
    repo: "https://github.com/michellenieto5/DVWA-report",
    demo: "",
  },
  TreasureApp: {
    title: "Treasure Hunt Mobile App",
    description: "An Android app for geo-located puzzles that turn city exploration into an interactive game.",
    highlights: [],
    images: ["/images/treasure1.png", "/images/treasure2.png", "/images/treasure3.png", "/images/treasure4.png"],
    repo: "https://github.com/michellenieto5/Treasure-Hunt",
    demo: "",
  },
  dentalApp: {
    title: "Dental WebApp",
    description: "Clinic admin portal for appointments, patients, and reports.",
    highlights: [
      "Built a backend with MySQL using SQL queries for patients, providers, treatments, and appointments.",
      "Designed a relational schema with tables and FKs for patient records, treatment orders, and provider assignments.",
      "Enabled secure, intuitive record management via a web interface.",
    ],
    images: ["/images/adminDental.png"],
    repo: "https://github.com/michellenieto5/CS-340-Project",
    demo: "",
  },
  budgetApp: {
    title: "BudgetApp",
    description: "An app to track income and expenses with category breakdowns and graphs.",
    highlights: [
      "Developed a full-stack web application to track user income and expenses, providing real-time budget analysis and visualizations using Google Charts.", 
      "Utilized JavaScript and Google Charts API to dynamically display real-time financial data and allow users to add and categorize income and expenses with an intuitive interface.",
      "Developed an Express server to handle backend processes, including form submissions and data storage.",
    ],
    images: [],
    repo: "https://github.com/michellenieto5/BudgetApp",
    demo: "",
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
        <h3 className="text-2xl font-semibold mb-2">
          {projects[selected as keyof typeof projects].title}
        </h3>

        {/* Optional summary paragraph */}
        {projects[selected as keyof typeof projects].description && (
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {projects[selected as keyof typeof projects].description}
          </p>
        )}

        {/* Optional bullet list */}
        {projects[selected as keyof typeof projects].highlights && (
          <ul className="text-left mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            {projects[selected as keyof typeof projects].highlights!.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {/* Image slider (only if images exist) */}
        {projects[selected as keyof typeof projects].images.length > 0 && (
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
        )}

        {/* Links */}
        <div className="flex justify-center gap-6 mt-6">
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

  