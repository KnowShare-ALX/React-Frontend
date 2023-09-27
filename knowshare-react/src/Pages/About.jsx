import React from "react";

const About = () => {
  return (
    <div>
      <div className="container mx-auto p-8 lg:px-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">
          Welcome to KnowShare
        </h1>
        <p className="text-gray-700 md:text-lg">
          KnowShare is a cutting-edge social media platform with a unique focus
          on knowledge sharing and active learning. Our team comprises highly
          skilled developers with expertise in both frontend and backend
          technologies.
        </p>

        <p className="mt-4 text-gray-700 md:text-lg">
          KnowShare is designed to foster a vibrant community of learners and
          educators. Users can easily create and access educational content
          across various domains. What sets KnowShare apart is its capability to
          allow content creators to monetize their expertise, turning their
          passion into a rewarding experience. Our platform aims to bridge the
          gap between those seeking knowledge and those willing to share it.
        </p>
      </div>

      <section
        id="about"
        className="bg-[#0f7173] text-white py-16 md:py-20 lg:py-24  xl:py-32"
      >
        <div className="container mx-auto px-8 lg:px-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            About KnowShare
          </h2>
          <p className="md:text-lg">
            At KnowShare, we believe in the power of sharing knowledge. Our
            platform is designed to provide a space where learners and educators
            can come together to exchange ideas, insights, and expertise.
            Whether you're a lifelong learner or an experienced educator,
            KnowShare is here to support your journey.
          </p>
        </div>
      </section>

      <section
        id="features"
        className="bg-white py-16 md:py-20 lg:py-24 xl:py-32"
      >
        <div className="container mx-auto px-8 lg:px-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 md:text-lg">
            <li>
              Access a wide range of educational content across various domains.
            </li>
            <li>
              Create and share your own educational content with our
              user-friendly tools.
            </li>
            <li>Monetize your expertise and passion for teaching.</li>
            <li>
              Connect with a community of learners and educators from around the
              world.
            </li>
            <li>
              Bridge the gap between knowledge seekers and knowledge providers.
            </li>
          </ul>
        </div>
      </section>

      {/* Additional sections or content can be added here */}
    </div>
  );
};

export default About;
