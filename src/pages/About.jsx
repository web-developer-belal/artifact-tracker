import React from "react";
import { FaGlobe, FaHistory, FaUserFriends } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-4">About Artifact Tracker</h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        Artifact Tracker is a beautifully designed platform to explore, share, and track historical artifacts.
        It's a Community where you can share your finds. Tt connects
        enthusiasts, historians, and cultural institutions across the globe.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-base-100 p-6 rounded-xl shadow space-y-3">
          <FaGlobe className="text-4xl text-primary mx-auto" />
          <h2 className="text-xl font-semibold">Global Access</h2>
          <p className="text-gray-600">Our platform empowers users from every corner of the world to contribute to the preservation of history.</p>
        </div>
        <div className="bg-base-100 p-6 rounded-xl shadow space-y-3">
          <FaHistory className="text-4xl text-secondary mx-auto" />
          <h2 className="text-xl font-semibold">Preserving the Past</h2>
          <p className="text-gray-600">We aim to make history accessible through rich storytelling and digital preservation of artifacts.</p>
        </div>
        <div className="bg-base-100 p-6 rounded-xl shadow space-y-3">
          <FaUserFriends className="text-4xl text-accent mx-auto" />
          <h2 className="text-xl font-semibold">Community Collaboration</h2>
          <p className="text-gray-600">Connect with fellow historians and collectors to share your passion and discoveries.</p>
        </div>
      </div>

      <div className="bg-base-200 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-2xl font-bold text-neutral">Join Our Mission</h3>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          We believe that every artifact tells a story worth preserving. Whether you're an academic researcher, a museum curator,
          or a curious explorer, Artifact Tracker is your platform to contribute, discover, and celebrate the legacy of human civilization.
        </p>
      </div>
    </div>
  );
};

export default About;
