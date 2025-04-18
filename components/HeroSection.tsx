// components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}
      >
        <h1 className="text-4xl sm:text-7xl font-semibold winky-font">
          Hi, <span className="michelle-flare">Michelle</span> here.
        </h1>
        <p className="text-2xl winky-sans-thin mt-5 max-w-prose">
          I like to write code to create things with the hope of leaving this world a little better than how I found it!
        </p>
        <div className="flex gap-10 items-center flex-col">
        <a
        className="mt-8 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-4 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="mailto:michellepnieto@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"/>
        </svg>
        Say Hi!
        </a>
        </div>
      </section>
    );
  }
  