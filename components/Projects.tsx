// components/Projects.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


//Array of projects for each card. UI loops on this array to know what to do for each card
const projects = [
    { image: "/images/login.png", title: "Source Travel App", year: "2025", role: "Developer",  technologies: "Next.js, React, JWT, Prisma", desc: "A full-stack travel planner with map integration and social features.", href: "/projects/source-travel"},
    { image: "/images/login.png", title: "Digital Forensics", year: "2025", role: "Digital Forensic Analyst", technologies: "Autopsy, Linux OS, VMWare, ShellBag", desc: "I like digging through data to figure out what really happened, it’s like problem-solving with evidence.", href: "/projects/forensics" },
    { image: "/images/adminDental.png", title: "Dental WebApp", year: "2024", role: "Developer", technologies: "Flask, MySQL, Python, HTML/CSS", desc: "Clinic admin portal for appointments, patients, and reports.", href: "/projects/dental-app" },
    { image: "/images/treasure2.png", title: "Treasure Hunt Mobile App", year: "2024", role: "Developer",  technologies: "Kotlin", desc: "An Android app for geo-located puzzles that turn city exploration into an interactive game.", href: "/projects/treasure-mobile-hunt" },
    { image: "/images/dvwa.png", title: "DVWA - Damn Vulnerable Web Application", year: "2024", role: "Penetrator", technologies: "Linux, MySQL, Python, VMWare", desc: "Damn Vulnerable Web Application (DVWA) is a PHP/MariaDB web application that is damn vulnerable. Its main goal is to be an aid for security professionals to test their skills and tools in a legal environment.", href: "/projects/dvwa" },
];

// For each element of the array project. Each loop creates one card!
// The card is a motion.div with animations and it should direct the user to a page with more information about the project. 
export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-start text-center px-6 py-32">
      <div className="max-w-5xl mx-auto px-6 text-center winky-sans">
        <h2 className="text-4xl font-bold mb-10">------- /** Projects */ -------</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, year, role, technologies, desc, href }, idx) => (
            <Link key={idx} href={href} className="block">
                <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl border shadow-md bg-[#14553A] border border-[#1C6B48] hover:shadow-lg transition-shadow duration-300 flex flex-col h-80 space-y-4"
                >

                <h3 className="text-2xl font-semibold">{title}</h3>

                <p className="text-base">{role}</p>

                <p className="text-base line-clamp-3">{desc}</p>

                <p className="text-base mb-1">{technologies}</p>
                </motion.div>
            </Link>
            ))}
        </div>
      </div>
    </section>
  );
}