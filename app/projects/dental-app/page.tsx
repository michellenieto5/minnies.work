"use client";

import Image from "next/image";
import { useState } from "react";

const dentalAppImages = [
  "/images/adminDental.png",
];

export default function DentalAppPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dentalAppImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === dentalAppImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="scroll-smooth min-h-screen px-6 py-4 max-w-6xl mx-auto winky-sans space-y-8">
      {/* Title + meta */}
      <header>
        <h1 className="text-4xl font-bold mb-4">Dental WebApp</h1>

        <p className="mb-1">Year: 2024</p>
        <p className="mb-1">Role: Developer</p>
        <p className="">
          Technologies: Flask, MySQL, Python, HTML/CSS
        </p>
      </header>

      {/* Image slider */}
      <section className="space-y-3">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={dentalAppImages[currentIndex]}
            alt={`Dental App screenshot ${currentIndex + 1}`}
            fill
            className="object-cover"
          />

          {/* Left button */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white text-sm px-3 py-1 rounded-full hover:bg-black/60 transition"
          >
            ‹
          </button>

          {/* Right button */}
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white text-sm px-3 py-1 rounded-full hover:bg-black/60 transition"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
            {dentalAppImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* description */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Overview - Goals</h2>
        <p className="text-lg leading-relaxed">
        A full-stack web application built for a dental practice to manage patients, treatments, invoices, and referral options. The system directly connects to a MySQL database using raw SQL queries and follows a fully designed relational schema with proper relationships, constraints, and CRUD operations across all core entities.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
        <li> <strong>Patient Management: </strong> Add, edit, view, and delete patient records.</li>
          <li> <strong>Treatment & Appoinment: </strong> Link treatments to patients and maintain visit history. </li>
          <li><strong>Invoice Generation:</strong> Automatically create and update invoices based on treatment records.</li>
          <li><strong>CRUD System: </strong> : Every feature uses direct SQL queries for create, read, update, delete operations.</li>
          <li><strong>Data Model & ERD: </strong> Complete schema design including relationships, data types, primary/foreign keys.</li>
        </ul>
      </section>

      {/*role */}
      <section className="space-y-3">
      <h2 className="text-2xl font-semibold">My Role & Takeaways</h2>
      <p className="text-base leading-relaxed">
      I collaborated closely with Colleen throughout the project, often working together over the phone to design, build, and refine the entire application. I contributed to all major parts of the system, including helping create the relational database schema, writing and testing the SQL queries for the CRUD operations, and ensuring the tables, relationships, and constraints were correctly implemented. I also helped connect the database logic to the application features, troubleshoot issues, and make sure the final system worked smoothly from end to end.
      </p>

      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
        <li> Strengthened understanding of relational database design and SQL query optimization.
        </li>

        <li>Learned how to connect a web application directly to a MySQL database without ORMs.
        </li>

        <li> Gained hands-on experience building a functional data-driven system from schema to front-end workflow
        </li>
        </ul>

      <p className="text-base leading-relaxed">
        This project was developed over a 3-month period with my teammate Colleen as part of our DB course at Oregon State University.</p>
    </section>

    </main>
  );
}