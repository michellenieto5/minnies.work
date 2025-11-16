// components/AboutSection.tsx
import Image from 'next/image';
import TechListItem from "../components/TechListItem";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex items-start justify-center px-40 py-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image */}
        <div className="max-w-6xl flex flex-1 justify-center">
          <img
            src="/images/me.jpg"
            alt="My Image"
            className="w-100 h-140 rounded-2xl object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 text-center md:text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 winky-sans">About Me</h2>
          <p className="text-lg text-white-700 winky-sans-thin">
              I’m a Computer Science major at{" "}
              <span className="text-gray-400 italic winky-sans">Oregon State University</span>,
              minoring in Cybersecurity. While I value secure development practices, my
              true passion is software development, building cool things that make a
              real impact in people's lives.
          </p>
          <p className="mt-4 winky-sans">
            Through my projects, I've discovered how much I love every part of the
            process: from designing web apps to coding native apps, learning new
            technologies, collaborating on teams, and pushing ideas into reality.
          </p>

          <p className="mt-4 winky-sans-thin">
            Here are some of the technologies I've worked with:
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-white-700 winky-sans-thin">
            <TechListItem>C++</TechListItem>
            <TechListItem>React & Next.js</TechListItem>
            <TechListItem>Express</TechListItem>
            <TechListItem>Tailwind CSS</TechListItem>
            <TechListItem>Node.js</TechListItem>
            <TechListItem>Swift</TechListItem>
            <TechListItem>Kotlin</TechListItem>
            <TechListItem>Linux</TechListItem>
          </ul>
          
          <p className="mt-4 winky-sans-thin">
          Aaaand... I’m from Colombia 🇨🇴! I love dancing, traveling, and doing things that make a difference, whether that’s coding something useful or helping out in my community.
        </p>

        </div>


      </div>
    </section>
  );
}

  