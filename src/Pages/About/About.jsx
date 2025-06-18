import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-16 mb-16 text-gray-800">
      <Helmet>
                <title>About | Green Tech </title>
            </Helmet>
      <h1 className="text-4xl font-extrabold mb-8 text-center text-green-700">About Green Tech</h1>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Welcome to <strong>Green Tech</strong> — your trusted destination for the latest and most
          innovative technology products in North America. We are passionate about bringing you
          cutting-edge gadgets, smart devices, and tech accessories that enhance your lifestyle and
          keep you ahead of the curve.
        </p>

        <p>
          Founded with a mission to combine technology with sustainability, Green Tech is dedicated
          to offering products that not only perform exceptionally but also promote a greener,
          cleaner future. We carefully select each product to ensure quality, durability, and
          environmental responsibility.
        </p>

        <p>
          Our North America–based team works tirelessly to provide you with a seamless shopping
          experience, excellent customer support, and fast shipping across the continent. Whether
          you’re a tech enthusiast, professional, or someone just discovering the benefits of
          smart technology, Green Tech is here to support your journey.
        </p>

        <p>
          Thank you for choosing Green Tech. We’re excited to be part of your tech evolution.
          Explore our collection and experience technology that’s smart, sustainable, and made for
          you.
        </p>
      </section>
    </div>
  );
};

export default About;
