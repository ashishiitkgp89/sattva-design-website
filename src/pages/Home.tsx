import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Crafting Spaces</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Creating timeless architectural designs that inspire and endure
            </p>
            <button 
              onClick={() => navigate('/projects')}
              className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>
    </>
  );
}