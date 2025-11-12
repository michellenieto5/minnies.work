// components/AboutSection.tsx
import TechListItem from "../components/TechListItem";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start justify-center px-20 py-40"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/me.jpg"
            alt="My Image"
            className="w-99 h-140 rrounded-none object-cover shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 text-center md:text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-white-700">
              I’m a Computer Science major at{" "}
              <span className="text-gray-400 italic">Oregon State University</span>,
              minoring in Cybersecurity. While I value secure development practices, my
              true passion is software development — building cool things that make a
              real impact in people's lives.
          </p>
          <p className="mt-4">
            Through my projects, I've discovered how much I love every part of the
            process: from designing web apps to coding native apps, learning new
            technologies, collaborating on teams, and pushing ideas into reality.
          </p>

          <p className="mt-4">
            Here are some of the technologies I've worked with:
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-white-700">
            <TechListItem>C++</TechListItem>
            <TechListItem>React & Next.js</TechListItem>
            <TechListItem>Express</TechListItem>
            <TechListItem>Tailwind CSS</TechListItem>
            <TechListItem>Node.js</TechListItem>
            <TechListItem>Swift</TechListItem>
            <TechListItem>Kotlin</TechListItem>
            <TechListItem>Linux</TechListItem>
          </ul>
          
          <p className="mt-4">
          Aaaand... I’m from Colombia 🇨🇴! I love dancing, traveling, and doing things that make a difference — whether that’s coding something useful or helping out in my community.
        </p>

        </div>


      </div>
    </section>
  );
}

  