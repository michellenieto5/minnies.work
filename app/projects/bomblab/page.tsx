"use client";

export default function BombLabPage() {
  return (
    <main className="scroll-smooth min-h-screen px-6 py-4 max-w-6xl mx-auto winky-sans space-y-8">
      {/* Title + meta */}
      <header>
        <h1 className="text-4xl font-bold mb-4">Binary Bomb Lab – x86 Reverse Engineering</h1>

        <p className="mb-1">Year: 2024</p>
        <p className="mb-1">Role: Student / Reverse Engineer</p>
        <p>Technologies: QEMU, GDB, Kali Linux, x86 Assembly</p>
      </header>

      {/* Overview */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Overview – Goals</h2>
        <p className="text-lg leading-relaxed">
          This project was a binary “bomb lab” where I had to reverse-engineer a compiled
          32-bit program and defuse six phases by discovering the exact inputs it expected.
          Instead of having access to the source code, I used QEMU and GDB to step through x86
          assembly, inspect memory, and understand how each phase validated my input. The goal was
          to train low-level debugging, assembly reading, and problem-solving under pressure.
        </p>
      </section>

      {/* Tools & Setup */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Tools &amp; Setup</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          <li>Configured a local VM with 32-bit compatibility to run the bomb binary.</li>
          <li>Used <strong>qemu-i386 -g 1234</strong> to run the bomb and attach <strong>GDB</strong> remotely.</li>
          <li>Set breakpoints on each <code>phase_n</code> function to stop execution and inspect state.</li>
          <li>Used GDB to disassemble functions, inspect memory (<code>x/s</code>), and trace control flow.</li>
        </ul>
      </section>

      {/* Key Techniques */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Techniques</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          <li>Reading x86 assembly to understand string comparisons, loops, and conditionals.</li>
          <li>Using <code>strings_not_equal</code>, <code>sscanf</code>, and other helper functions as clues for input format.</li>
          <li>Following jump tables (switch statements) and mapping indices to specific valid inputs.</li>
          <li>Recognizing recursive patterns (Fibonacci-like functions) and solving for target outputs.</li>
          <li>Working with lookup tables and bit-masking to reverse-engineer string transformations.</li>
        </ul>
      </section>

      {/* Phase Walkthrough */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Phase Walkthrough</h2>
        <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
          <li>
            <strong>Phase 1 – String Comparison</strong><br />
            <span className="italic">Input:</span> <code>Public speaking is very easy.</code><br />
            Set a breakpoint on <code>phase_1</code>, followed the call into <code>strings_not_equal</code>,
            and inspected the reference string at address <code>0x80497c0</code> via <code>x/s</code>.
            The comparison string was exactly “Public speaking is very easy.”, so providing that as input defused the phase.
          </li>

          <li>
            <strong>Phase 2 – Factorial-like Sequence</strong><br />
            <span className="italic">Input:</span> <code>1 2 6 24 120 720</code><br />
            The assembly called <code>read_six_numbers</code> and enforced that the first number was 1.
            A loop using <code>imul</code> and <code>lea</code> built a sequence where each value was the previous
            one multiplied by its index+1, effectively a factorial pattern. I derived the required sequence of six numbers.
          </li>

          <li>
            <strong>Phase 3 – Jump Table / Switch Logic</strong><br />
            <span className="italic">Input:</span> <code>2 b 755</code><br />
            Disassembly showed a call to <code>sscanf</code> with the format <code>%d %c %d</code>, meaning the phase
            expected an integer, a character, and another integer. A computed jump (<code>jmp *table(,%eax,4)</code>)
            acted as a switch on the first integer, with each case tying a specific character and number together.
            I chose a valid triple that matched one of the cases: <code>2 b 755</code>.
          </li>

          <li>
            <strong>Phase 4 – Recursive Function (Fibonacci-style)</strong><br />
            <span className="italic">Input:</span> <code>9</code><br />
            Phase 4 read a single positive integer and passed it into <code>func4</code>, which recursively called
            itself with <code>(n-1)</code> and <code>(n-2)</code> and added the results, matching a Fibonacci-like structure.
            The result was compared against <code>0x37</code> (55 decimal). Solving this showed that <code>n = 9</code> produces 55.
          </li>

          <li>
            <strong>Phase 5 – Lookup Table &amp; Bit-masking</strong><br />
            <span className="italic">Input:</span> <code>Opukmq</code><br />
            The phase required a six-character string and masked each character with <code> 0xf</code> to use only the
            low nibble as an index into a lookup table at <code>0x804b220</code>. The transformed string was then compared
            to “giants”. I mapped the indices for “giants” and chose characters whose hex values ended in those nibbles,
            producing an input that decoded correctly.
          </li>
        </ul>
      </section>

      {/* My Role & Takeaways */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">My Role &amp; Takeaways</h2>
        <p className="text-base leading-relaxed">
          I completed all phases of the bomb myself, from configuring the 32-bit environment to reverse-engineering each
          phase with GDB. This lab strengthened my understanding of how low-level programs validate input, how to read and
          reason about x86 assembly, and how to use tools like QEMU and GDB to control execution, inspect memory, and
          reconstruct logic from binaries. I especially enjoyed the feeling of “making the program talk” by setting
          breakpoints, calling helper functions, and discovering the exact inputs it needed to survive.
        </p>
        {/* PDF viewer */}
        <div className="border rounded-xl shadow-lg overflow-hidden bg-white">
             <iframe
                src="/docs/reverseeng.pdf"
                className="w-full h-[900px]"
                style={{ border: "none" }}
             ></iframe>
        </div>

        <a
        href="/docs/reverseeng.pdf"
        target="_blank"
        className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition"
        >
        Open Full PDF in New Tab
        </a>
        </section>
    </main>
  );
}
