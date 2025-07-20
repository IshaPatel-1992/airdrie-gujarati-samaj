import React from "react";
import { LinkButton } from "../components/ui/LinkButton.jsx"; // Adjust the path if needed

export default function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto animate-fadeIn text-brand">
      { /* <h2 className="text-3xl font-heading font-bold tracking-wide text-center text-brand mb-10">
        About Us
      </h2>
      <p className="text-sm text-gray-700 leading-relaxed">
        Airdrie Gujarati Samaj is a nonprofit cultural association committed to
        fostering community, preserving our vibrant Gujarati heritage, and
        creating a welcoming space for families and individuals of all ages.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        We promote cultural awareness through festivals, workshops, and
        community events that connect generations and support newcomers.
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        Join us to celebrate tradition and build a united Gujarati community in
        Airdrie and beyond!
      </p> */ } 
      <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-wide text-center text-brand mb-8">
  About Us
</h2>

<div className="space-y-6 text-gray-800 text-base leading-relaxed font-sans max-w-2xl mx-auto text-center">
  <p>
    <strong className="text-brand">Airdrie Gujarati Samaj</strong> is a nonprofit cultural association
    dedicated to fostering <strong>community spirit</strong>, preserving our vibrant
    <strong> Gujarati heritage</strong>, and creating a warm, inclusive environment
    for families and individuals of all ages.
  </p>

  <p>
    We celebrate our culture through <strong>festivals</strong>, <strong>workshops</strong>,
    and <strong>community events</strong> that bridge generations, support newcomers,
    and strengthen the ties that bind us.
  </p>

  <p>
    Join us in honoring our <strong>traditions</strong>, sharing our stories, and building a
    united and culturally rich Gujarati community in Airdrie — and beyond.
  </p>
</div>

       <div className="bg-brand text-white p-6 rounded-2xl shadow-md text-center mt-10">
        <h3 className="text-xl font-semibold mb-2">Become a Member</h3>
        <p className="mb-4">
          Ready to be part of something meaningful? Enjoy exclusive events and
          community programs.
        </p>
        <a
          href="/membershipdetails"
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded"
        >
          Join Us
        </a>
      </div> 
      { /* <div className="mt-10 bg-yellow-50 border border-yellow-300 rounded-xl p-6 sm:p-8 text-center shadow-md animate-fadeIn">
        <h3 className="text-2xl font-bold text-brand mb-3">Become a Member</h3>
        <p className="text-gray-800 mb-6 text-sm sm:text-base">
          Join our vibrant Gujarati community in Airdrie and enjoy access to
          cultural events, festivals, and more.
        </p>
        <a
          href="/membershipdetails"
          className="inline-block bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3 rounded-full transition-transform duration-200 hover:scale-105"
        >
          Join Us Today →
        </a>
      </div> */ }
    </div>
  );
}
