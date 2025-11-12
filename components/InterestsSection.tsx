// components/InterestsSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Network, Server, Lock, Code2, Mountain } from "lucide-react";

const interests = [
  { icon: ShieldCheck, title: "Digital Forensics", desc: "I like digging through data to figure out what really happened, it’s like problem-solving with evidence." },
  { icon: Network, title: "Network Architecture", desc: "I enjoy building systems that make sense. Clean, organized, and built to last." },
  { icon: Server, title: "Backend & APIs", desc: "I like writing logic that actually does something; seeing the data move feels rewarding." },
  { icon: Lock, title: "Cybersecurity", desc: "I like testing how things break so I can learn how to protect them." },
  { icon: Code2, title: "App Development", desc: "I like turning an idea into something that works, even if it takes hours of trial and error. Like this website! hahah" },
  { icon: Mountain, title: "Hiking & Nature", desc: "Being outside clears my head. It makes me feel so good." },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Things I Love</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl border border-purple-200 shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <Icon className="w-12 h-12 text-purple-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-2 text-purple-600">{title}</h3>
              <p className="text-gray-800 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

  