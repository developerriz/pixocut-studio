import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiZap,
  FiFeather,
  FiLayers,
  FiClock,
  FiDownload,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "AI-powered background removal",
    desc: "Remove backgrounds automatically with high accuracy.",
  },
  {
    icon: FiFeather,
    title: "High-quality edge detection",
    desc: "Handles hair, fur and fine details.",
  },
  {
    icon: FiClock,
    title: "Fast processing",
    desc: "Gets results in a few seconds.",
  },
  {
    icon: FiDownload,
    title: "Download in HD",
    desc: "Export clean images in high quality.",
  },
  {
    icon: FiBarChart2,
    title: "Real-time usage tracking",
    desc: "Monitor activity from the analytics dashboard.",
  },
  {
    icon: FiLayers,
    title: "Multiple formats",
    desc: "Support for PNG, WebP and transparent exports.",
  },
];

export default function About({ onSignIn, onSignUp, currentUser, onLogout }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06050F] font-plus text-[#F0EEFF]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(79,70,229,.18)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_85%_20%,rgba(124,58,237,.14)_0%,transparent_65%),radial-gradient(ellipse_70%_60%_at_50%_80%,rgba(37,99,235,.12)_0%,transparent_65%),radial-gradient(ellipse_50%_40%_at_90%_90%,rgba(168,85,247,.10)_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.04)_1px,transparent_0)] bg-[length:12px_12px] opacity-20" />

      <Navbar
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        currentUser={currentUser}
        onLogout={onLogout}
      />

      <main className="page-shell mx-auto py-20">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h1
              className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg"
              style={{
                backgroundImage: "url('/neon.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Our AI Background Remover
            </h1>

            <p className="text-lg text-gray-100 leading-7 mb-6">
              We built this platform to make background removal fast, simple,
              and accessible for everyone. With the power of AI, you can remove
              backgrounds from images in seconds — no design skills required.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => onSignUp?.()}
                className="rounded-full bg-gradient-to-br from-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(124,58,237,.18)]"
              >
                Get started — it's free
              </button>

              <button
                onClick={() => onSignIn?.()}
                className="rounded-full border border-violet-500/25 px-5 py-3 text-sm text-[#F0EEFF]"
              >
                Sign in
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,.02)] p-6 backdrop-blur-xl shadow-lg">
              <h4 className="text-lg font-semibold mb-1">What We Do</h4>
              <p className="text-sm text-gray-200">
                Our app uses advanced AI models to detect subjects and remove
                backgrounds with high precision. Whether it's portraits, product
                images, or complex edges like hair, we deliver clean and
                professional results instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,.02)] p-6 backdrop-blur-xl shadow-lg">
              <h4 className="text-lg font-semibold mb-1">
                Why This App Exists
              </h4>
              <p className="text-sm text-gray-200">
                Most background removal tools are either slow, expensive, or
                hard to use. We wanted to create a solution that is fast,
                reliable, and user-friendly — designed for creators, developers,
                and businesses alike.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group relative rounded-2xl border border-white/10 bg-[rgba(255,255,255,.02)] p-6 backdrop-blur-xl hover:shadow-2xl transition"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-200">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
            Who Can Use This
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-gray-200">
              <li>• Content creators</li>
              <li>• E-commerce sellers</li>
              <li>• Designers</li>
              <li>• Developers</li>
              <li>• Students and beginners</li>
            </ul>

            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,.02)] p-6 backdrop-blur-xl">
              <h4 className="font-semibold mb-2">Perfect for quick edits</h4>
              <p className="text-sm text-gray-200">
                Anyone who needs quick and clean image editing — from
                single-shot creatives to teams processing hundreds of images.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Closing */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-pink-400">
            Our Vision
          </h2>
          <p className="max-w-3xl mx-auto text-gray-100 mb-6">
            We aim to simplify image editing using AI and make powerful tools
            accessible to everyone. Our goal is to build a complete creative
            platform where users can edit, enhance, and transform images
            effortlessly.
          </p>

          <p className="text-lg font-semibold">
            We’re just getting started — more powerful features are coming soon
            🚀
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
