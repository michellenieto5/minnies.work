"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export default function ForensicsPage() {
  return (
    <main className="scroll-smooth min-h-screen px-6 py-4 max-w-6xl mx-auto winky-sans space-y-8">
      {/* Title + meta */}
      <header>
        <h1 className="text-4xl font-bold mb-4">Digital Forensics Investigation – Project K2</h1>

        <p className="mb-1">Year: 2025</p>
        <p className="mb-1">Role: Digital Forensics Analyst</p>
        <p className="">
          Technologies: Autopsy, Windows Event Logs, ShellBags Explorer, Nmap, VMWare, Linux, Registry Analysis
        </p>
      </header>

      {/* description */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Overview - Goals</h2>
        <p className="text-lg leading-relaxed">
        This project is a full forensic investigation of a compromised Windows
          workstation image ({`CS473.FINNE.image.s01`}) tied to suspicious
          activity around a confidential internal project (Project K2).
          The goal was to determine whether the primary user account was a lone
          insider threat, or whether the device had been compromised and staged
          in advance. By correlating logs, registry artifacts, ShellBag
          remnants, USB activity, and email traces, I reconstructed a contaminated
          timeline and showed that the system had been compromised months before
          the user's first login.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Investigation Workstreams</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          <li> <strong>Timeline Reconstruction:</strong> Correlated Windows Event
            Logs (e.g., 4616, 4672, 4720–4798) with registry and file system
            artifacts to rebuild activity between December 2024 and March 2025.</li>
          <li> <strong>Time Manipulation Analysis:</strong> Identified repeated,
            irregular system clock changes by SYSTEM, it-support, and Finne,
            revealing deliberate timeline contamination beyond normal DST shifts.</li>
          <li><strong>Account Overlap / Privilege Escalation:</strong>
            Tracked overlapping logons and consent.exe events, showing how the
            it-support and Finne accounts were used together for elevation and
            backend access.</li>
          <li><strong>ShellBag Forensics:</strong> Used ShellBags
            Explorer and Autopsy to detect deleted folder history, recover
            remnants, and prove prior access despite attempted cleanup.</li>
          <li><strong>Artifact &amp; ShellBag Forensics:</strong> Used ShellBags
            Explorer and Autopsy to detect deleted folder history, recover
            remnants, and prove prior access despite attempted cleanup.</li>
        </ul>
      </section>

      {/*role */}
      <section className="space-y-3">
      <h2 className="text-2xl font-semibold">My Role & Takeaways</h2>
      <p className="text-base leading-relaxed">
      I owned the investigation end-to-end, from the initial hypothesis
          that the user might be an insider threat to the final conclusion that
          she was operating inside an already compromised environment.
      </p>

      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
        <li>
          <strong>Evidence-driven reasoning:</strong> Built conclusions only
            from observable artifacts (logs, registry, ShellBags, file metadata),
            documenting each step so another analyst could reproduce the findings.
        </li>

        <li>
          <strong>Complex timeline handling: </strong> Learned how repeated time
            changes and overlapping logons poison a forensic timeline, and how to
            work around that using cross-correlated event sources.
        </li>

        <li>
          <strong>Intrusion modeling: </strong> Translated raw Windows artifacts
            into a clear intrusion narrative that aligns with modern kill-chain
            thinking and attacker TTPs.
        </li>

        <li>
          <strong>Communication: </strong> Produced a structured
            report that could speak to both technical audiences (analysts,
            incident responders) and non-technical stakeholders (management,
            legal) without losing nuance.
        </li>
      </ul>


      <p className="text-base leading-relaxed">
      This project strengthened my ability to work with messy, manipulated
          data and still arrive at a defensible, evidence-based conclusion about
          what actually happened on a compromised system.
      </p>
    </section>

    <section className="space-y-3">
    <h2 className="text-2xl font-semibold">Full Report (PDF)</h2>

    {/* PDF viewer */}
    <div className="border rounded-xl shadow-lg overflow-hidden bg-white">
      <iframe
        src="/docs/digitalforensics.pdf"
        className="w-full h-[900px]"
        style={{ border: "none" }}
      ></iframe>
    </div>

    <a
      href="/docs/digitalforensics.pdf"
      target="_blank"
      className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition"
    >
      Open Full PDF in New Tab
    </a>
  </section>


    </main>
  );
}
