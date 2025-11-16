"use client";

import Image from "next/image";
import { useState } from "react";

const sourceTravelImages = [
  "/images/login.png",
  "/images/map.png",
  "/images/OSU.png",
];

export default function SourceTravelPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sourceTravelImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === sourceTravelImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="scroll-smooth min-h-screen px-6 py-4 max-w-6xl mx-auto winky-sans space-y-8">
      {/* Title + meta */}
      <header>
        <h1 className="text-4xl font-bold mb-4">Source Travel App</h1>

        <p className="mb-1">Year: 2025</p>
        <p className="mb-1">Role: Developer</p>
        <p className="">
          Technologies: Next.js, React, JWT, Prisma
        </p>
      </header>

      {/* Image slider */}
      <section className="space-y-3">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={sourceTravelImages[currentIndex]}
            alt={`Source Travel App screenshot ${currentIndex + 1}`}
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
            {sourceTravelImages.map((_, idx) => (
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
        Source Travel is a full-stack travel app where users can create trips, save locations, and share meaningful experiences that would otherwise get lost across different platforms. Each experience includes a title, description, category, rating, and location, making it easy for others to discover authentic recommendations. A category + rating system pushes the best experiences upward, while the map search feature lets users explore everything available in any area they zoom into. The goal is to give travelers a simple way to find real, user-driven activities instead of generic search results.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          <li>User authentication with JWT-based login and signup.</li>
          <li>Create, edit, and delete trips with dates and notes.</li>
          <li>Map integration to visualize destinations.</li>
          <li>Responsive design built with React and Next.js.</li>
        </ul>
      </section>

      {/*role */}
      <section className="space-y-3">
      <h2 className="text-2xl font-semibold">My Role & Takeaways</h2>
      <p className="text-base leading-relaxed">
        While the full application was built collaboratively, I personally designed
        and implemented several major features that shaped both the user experience
        and the backend architecture.
      </p>

      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
        <li>
          <strong>Home Page Layout & UI:</strong> Designed the entire homepage in
          Figma with Escher, including layout structure and visual hierarchy. 
        </li>

        <li>
          <strong>Database Architecture:</strong> Created the data model, mapped
          relationships, and deployed the PostgreSQL database using Prisma ORM.
          Ensured schema alignment with app requirements.
        </li>

        <li>
          <strong>Ratings System:</strong> Built the backend logic for submitting
          ratings, handled validation, and ensured correct writes/updates to the
          Prisma/PostgreSQL database.
        </li>

        <li>
          <strong>Experience Reviews UI:</strong> Designed and implemented the UI
          for displaying reviews on each experience page, and built the logic to
          pull, format, and render review data from the database.
        </li>

        <li>
          <strong>Experience Creation Flow:</strong> Developed the form where users
          can create experiences, including fields for title, name, description,
          rating, location, and categories. Built the request handling and ensured
          all submitted data is saved correctly.
        </li>

        <li>
          <strong>Data Consistency:</strong> Updated the Prisma models and
          scheduling logic to ensure reviews and experience data remained accurate
          and consistent inside Prisma Studio.
        </li>
      </ul>

      <p className="text-base leading-relaxed">
        This project was developed over a 9-month period with my teammates Escher
        and Trenton as part of our Senior Capstone at Oregon State University. The
        final application was presented at the OSU Engineering Expo in June 2025.
      </p>
    </section>

    </main>
  );
}

  