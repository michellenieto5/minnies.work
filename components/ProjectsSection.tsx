// components/ProjectsSection.tsx
// components/ProjectsSection.tsx
'use client'; // Mark this file as a client component
import { useState } from "react";

const projects = {
  budgetApp: {
    title: "BudgetApp",
    description: "An app to track income and expenses with category breakdowns and graphs.",
  },
  sourceTravel: {
    title: "Source Travel App",
    description: "A full-stack travel planner with map integration and social features.",
  },
  dawd: {
    title: "DAWD",
    description: "A desktop app for writing and organizing your daily logs and tasks.",
  },
  dentalApp: {
    title: "Dental WebApp",
    description: "Built for a local clinic to manage appointments, patients, and reports.",
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
      </div>
    </section>
  );
}

  