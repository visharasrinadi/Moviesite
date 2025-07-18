import React from "react";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    image: "https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A journey through space and time.",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    id: 3,
    title: "The Matrix",
    description: "Enter the world of the Matrix.",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  }
];

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎬 MovieMania</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Movies</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-cover bg-center h-64 flex items-center justify-center text-white text-center" style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/3295834.jpg)' }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-lg">
          <h2 className="text-3xl md:text-5xl font-bold">Welcome to MovieMania</h2>
          <p className="mt-2 text-lg">Discover and review your favorite films!</p>
        </div>
      </header>

      {/* Movie Cards */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Featured Movies</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{movie.title}</h4>
                <p className="text-sm mt-2 text-gray-600">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}

        © 2025 MovieMania. All rights reserved.
      </footer>
    </div>
  );
}
