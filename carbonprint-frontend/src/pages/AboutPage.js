import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-600 mb-4 text-center">
          🌱 CarbonPrint
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Track. Understand. Reduce. Repeat.
        </p>

        {/* Section: What is CarbonPrint */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            🌍 What is CarbonPrint?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CarbonPrint is your personal carbon footprint tracker. It lets you
            log daily lifestyle choices — from food and transport to water and
            electricity — and calculates your CO₂ emissions in real time.
            Designed for awareness and action, not just stats.
          </p>
        </section>

        {/* Section: Why This Matters */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            📊 Why Carbon Tracking Matters
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Climate change is real and urgent. But change starts with small,
            informed decisions. By tracking your emissions, you become part of a
            larger solution. CarbonPrint turns awareness into measurable,
            eco-conscious habits.
          </p>
        </section>

        {/* Section: Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            ⚙️ Features at a Glance
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>🎯 Daily activity logging by category</li>
            <li>📈 Visual summary and insights of your emissions</li>
            <li>🔐 JWT-secured authentication</li>
            <li>📅 Filter emissions by date or range</li>
            <li>🧠 Smart insights for low-carbon habits</li>
          </ul>
        </section>

        {/* Section: Future Plans */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            🚀 Coming Soon
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>📱 Mobile-friendly progressive web app</li>
            <li>🌍 Community leaderboard and challenges</li>
            <li>🔄 AI-powered suggestions for sustainability</li>
          </ul>
        </section>

        {/* Section: Creator */}
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            👨‍💻 Meet the Creator
          </h2>
          <p className="text-gray-600">
            Hi, I’m Shivam Gupta — a passionate full-stack developer building
            tools that matter. CarbonPrint is a personal initiative to merge my
            tech skills with climate consciousness. Open source. Data-driven.
            Impact-focused.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-center text-gray-400 text-sm">
          Version 1.0 · Built with React, Express, and MongoDB · 2025
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
