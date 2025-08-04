import React from "react";
import heroImage from "../assets/GujC1Resized.jpg";
import diya from "../assets/D1.jpeg";
import garba from "../assets/N3.jpeg";
import picnic from "../assets/P3.jpeg";

export default function Home() {
  const events = [
    {
      title: "Community Picnic",
      date: "July 20, 2025",
      location: "Nose Creek Park",
      image: picnic,
    },
    {
      title: "Diwali Celebration",
      date: "Nov. 8, 2025",
      location: "Airdrie Town Hall",
      image: diya,
    },
    {
      title: "Navaratri Garba",
      date: "Oct. 3, 2025",
      location: "Airdrie Community Centre",
      image: garba,
    },
  ];

  return (
    <div className="font-sans text-brand">
      {/* Hero Section */}
      <section
        className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="animate-fadeIn text-4xl md:text-5xl font-heading font-bold text-brand bg-white/70 px-4 py-2 rounded shadow-md">
          Celebrating Culture, Community & Unity.
        </h1>

        <h3 className="animate-fadeIn mt-4 text-2xl md:text-3xl font-heading font-bold text-brand bg-white/60 px-4 py-1 rounded shadow-sm">
          Let's grow together, Let's glow together
        </h3>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="uppercase tracking-wide bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded shadow transition transform hover:scale-105"
          >
            Contact Us
          </a>
          <a
            href="/events"
            className="uppercase tracking-wide bg-[#4b1d1d] hover:bg-[#5e2a2a]  text-white font-semibold px-6 py-2 rounded shadow transition transform hover:scale-105"
          >
            Upcoming Events
          </a>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[#f8eedf] py-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand mb-12">
          Upcoming Events
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold text-brand mb-1">
                  {event.title}
                </h3>
                <p className="text-sm font-medium">{event.date}</p>
                <p className="text-sm text-gray-600 mb-4">{event.location}</p>
                <a
                  href="/events"
                  className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-4 py-2 rounded-full transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
