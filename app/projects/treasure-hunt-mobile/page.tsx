"use client";

import Image from "next/image";
import { useState } from "react";

const TreasureHuntImages = [
  "/images/treasure1.png",
  "/images/treasure2.png",
  "/images/treasure3.png",
];

export default function TreasureHuntPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TreasureHuntImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === TreasureHuntImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="scroll-smooth min-h-screen px-6 py-4 max-w-6xl mx-auto winky-sans space-y-8">
      {/* Title + meta */}
      <header>
        <h1 className="text-4xl font-bold mb-4">Treasure Hunt Mobile App</h1>

        <p className="mb-1">Year: 2024</p>
        <p className="mb-1">Role: Developer</p>
        <p className="">
          Technologies: Kotlin - Andriod Studio
        </p>
      </header>

      {/* Image slider */}
      <section className="space-y-3">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={TreasureHuntImages[currentIndex]}
            alt={`Treasure Hunt App screenshot ${currentIndex + 1}`}
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
            {TreasureHuntImages.map((_, idx) => (
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
        A location-based treasure hunt game where players receive real-world clues, walk to the physical location, and use GPS to verify whether they’ve found the correct spot. The app tracks elapsed time, manages multiple clues, and guides the user through start, clue, hint, success, failure, and completion screens.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
        <li> <strong>Location-based gameplay</strong> Uses the device’s GPS to check if the user is within a given distance of each clue’s coordinates.</li>
          <li> <strong>Multi-screen flow with navigation: </strong> Start, Clue, Hint, Found, Not Found, and Completed screens managed via a Compose NavHost.</li>
          <li><strong>Clue model and game logic: </strong>Clues are defined with text, hint, and geo-coordinates; a ViewModel manages the current clue and transitions.</li>
          <li><strong>Distance calculation:</strong> Uses a Geo model and haversine formula to compute distance from the user to the clue.</li>
          <li><strong>Timer:</strong> Tracks and displays total elapsed time from the start of the game until completion.</li>
        </ul>
      </section>

      {/*role */}
      <section className="space-y-3">
      <h2 className="text-2xl font-semibold">My Role & Takeaways</h2>
      <p className="text-base leading-relaxed">
      I built the entire treasure hunt application myself, including the location logic, ViewModel structure, navigation flow, and all Jetpack Compose UI screens. I especially enjoyed this project because it was the first time I created my own reusable functions and then connected them to real in-app behavior, such as checking the user’s distance from a clue or progressing through the game stages. It was also my first experience working with device-level security features like requesting location permissions and safely accessing GPS data, which made the project both challenging and exciting. Building the UI around a state-driven ViewModel taught me how clean architecture and dynamic updates come together in a real Android app.
      </p>
    </section>

    </main>
  );
}