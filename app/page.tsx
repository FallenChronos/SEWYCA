import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Vision Section */}
      <section className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Our Vision
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We envisage a society where all experience <span className="font-semibold">fraternity, liberty, equality,</span> and <span className="font-semibold">justice</span> irrespective of caste, creed, and gender.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Our Mission
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          To empower the powerless and voiceless, especially <span className="font-semibold">Dalits, tribals, and backward classes</span>, with more emphasis on <span className="font-semibold">women, youth,</span> and <span className="font-semibold">children</span>, by educating, conscientizing, organizing, and supporting them in their struggles.
        </p>
      </section>

      {/* Placeholder for Images */}
      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        <div className="w-64 h-40 bg-gray-200 rounded-lg shadow-lg animate-pulse"></div>
        <div className="w-64 h-40 bg-gray-200 rounded-lg shadow-lg animate-pulse"></div>
        <div className="w-64 h-40 bg-gray-200 rounded-lg shadow-lg animate-pulse"></div>
      </div>
    </main>
  );
}
