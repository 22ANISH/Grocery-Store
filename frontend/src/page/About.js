import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-green-600">About Us</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
        At <span className="font-bold">The Good Food Co</span>, we believe that great food starts with the finest ingredients. Our goal is to bring fresh, high-quality groceries directly to your doorstep. Whether you're preparing a family dinner, trying a new recipe, or just stocking up your pantry, we are here to provide you with the best.
      </p>

      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold text-xl">✓</span>
            <p className="text-lg text-gray-700"> 
              <strong>Freshness Guaranteed:</strong> We handpick the freshest produce and products every day to ensure you receive the best quality.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold text-xl">✓</span>
            <p className="text-lg text-gray-700">
              <strong>Sustainability:</strong> We are committed to sustainable practices, from packaging to sourcing. Our products come from ethical suppliers who care about the environment and the welfare of their workers.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold text-xl">✓</span>
            <p className="text-lg text-gray-700">
              <strong>Convenient Shopping:</strong> Our easy-to-use online store lets you browse, select, and order your groceries with just a few clicks.
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold text-xl">✓</span>
            <p className="text-lg text-gray-700">
              <strong>Fast & Reliable Delivery:</strong> Get your groceries delivered to your doorstep when you need them. We offer flexible delivery options to fit your busy schedule.
            </p>
          </li>
        </ul>
      </div>

      {/* Our Story Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded with a passion for good food and better living, <span className="font-bold">The Good Food Co</span> started as a small family-owned business dedicated to offering high-quality groceries. Over the years, we’ve grown into a trusted name in the community, known for our exceptional customer service and unwavering commitment to quality.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are driven by one simple goal: to make your grocery shopping experience as smooth, enjoyable, and rewarding as possible. We believe that everyone deserves access to nutritious, high-quality food at affordable prices.
        </p>
      </div>

      {/* Community Section */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We’re more than just a grocery store; we’re a community. Follow us on social media to stay updated on the latest deals, new product arrivals, and delicious recipe ideas. Be part of <span className="font-bold">The Good Food Co</span> family today!
        </p>
        <a
          href="https://www.instagram.com/_aks_22_/"
          className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300">
          Follow Us on Social Media
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
