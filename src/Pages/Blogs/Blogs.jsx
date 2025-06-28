
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceSection from '../../Components/ServiceSection';

const blogPosts = [
  {
    title: 'Top 5 Smart Home Appliances in 2025',
    date: 'June 25, 2025',
    author: 'Admin',
    description: `Discover the best smart home appliances of 2025 that will transform your daily life. From AI-powered fridges to voice-controlled ovens, we cover the must-haves for your smart home setup.

    In recent years, the concept of smart homes has evolved rapidly. The convenience of controlling your devices through voice or mobile applications is no longer a luxury, but a norm. In 2025, the range of smart appliances has expanded beyond thermostats and lighting. Now, homes are adopting AI-integrated refrigerators that can suggest recipes based on what's inside, air conditioners that learn your cooling habits, and vacuum robots that map your house and avoid obstacles in real time.

    Some of the top smart appliances this year include the EcoCool Smart Fridge, which features energy-efficient AI learning systems, and the CleanBot 360, a vacuum robot with laser navigation. Smart ovens now come with camera integrations, allowing users to check their cooking progress from their smartphones. Also, don’t forget about smart laundry systems that notify you when your laundry is done or can schedule cycles during off-peak hours to save energy.

    Homeowners are embracing these technologies not just for convenience but also for sustainability. Many appliances now integrate with solar panel systems and smart meters, helping users reduce their carbon footprint.

    Overall, investing in smart appliances in 2025 is about improving lifestyle, ensuring safety, and promoting energy efficiency.`
  },
  {
    title: 'Why You Should Invest in a Security Camera This Year',
    date: 'June 20, 2025',
    author: 'Admin',
    description: `Security cameras are now more intelligent and affordable than ever. Learn how the latest innovations in surveillance technology can help protect your home and loved ones.

    With the rise in urbanization and a growing concern for personal safety, home security has become more critical than ever. In 2025, security cameras are equipped with AI-based motion detection, facial recognition, and even license plate reading capabilities. These features help in reducing false alerts and provide more accurate surveillance.

    One of the top trends this year is cloud-connected security systems that allow users to access real-time footage from anywhere using their smartphones. Cameras like the GuardPro X2 come with 360-degree rotation and color night vision, which ensures clear footage even in low light. Some devices also include two-way audio, allowing homeowners to communicate directly with visitors or delivery personnel.

    Another major improvement is integration with other smart home devices. For instance, when your security camera detects motion, it can automatically turn on the lights or alert you via smart speakers. Furthermore, some systems now offer automatic police notification in case of verified threats.

    Whether you live in a standalone house or an apartment, investing in a good security camera system offers peace of mind and adds an extra layer of protection.`
  },
  {
    title: 'Smartwatch Buying Guide for Beginners',
    date: 'June 15, 2025',
    author: 'Admin',
    description: `New to smartwatches? This guide helps you understand the features, price range, and compatibility of popular smartwatches available in 2025.

    Smartwatches have become an essential tech accessory for many. In 2025, their role has expanded from just showing notifications to being a personal fitness tracker, health monitor, and even a portable assistant. If you're buying your first smartwatch, there are a few things to consider: compatibility, battery life, health features, and price.

    First, determine whether the smartwatch is compatible with your smartphone. Apple Watches work best with iPhones, while Wear OS devices are more Android-friendly. Some brands now offer cross-platform functionality, which is ideal for users who may switch devices.

    Secondly, look at the battery life. Some smartwatches, like the EnduroFit Pro, can last up to 14 days on a single charge, while more feature-heavy ones may require daily charging. Health features like heart rate monitoring, ECG, SpO2 sensors, and sleep tracking are also key factors.

    Additionally, consider whether the watch supports third-party apps, has built-in GPS, and offers cellular connectivity. If you're a fitness enthusiast, opt for a watch that can track multiple workout modes, and is water-resistant.

    Ultimately, the best smartwatch is the one that fits your lifestyle, budget, and device ecosystem. This guide ensures you make an informed choice.`
  },
  {
    title: '2025’s Best Budget Smartphones',
    date: 'June 10, 2025',
    author: 'Admin',
    description: `You don’t need to spend a fortune for great performance. Explore the best budget smartphones of 2025 that offer excellent value for money.

    Budget smartphones have come a long way, and in 2025, you can find feature-rich devices under $300. These phones come with powerful chipsets, decent cameras, long-lasting batteries, and clean software experiences. Brands like RealMax, Tecnova, and EcoMob are dominating the market with their budget-friendly yet reliable phones.

    A few top picks include the RealMax N8, which boasts a 90Hz AMOLED display, a MediaTek G95 processor, and a 5000mAh battery. The Tecnova Lite 5 offers a triple-camera setup, sleek design, and Android 14 out of the box. Battery life and build quality have significantly improved, and even budget models now offer biometric security and fast charging.

    What sets these devices apart is their commitment to software updates and optimization. Many manufacturers are ensuring at least two years of security patches and major Android updates, which was rare in the budget segment before.

    Whether you need a backup phone or a daily driver that doesn’t break the bank, the 2025 budget smartphone lineup has something for everyone. This article helps you find a device that gives you the most value for your money.`
  }
];

const BlogPage = () => {
  return (
      <div>
            <div className="bg-gray-100 min-h-screen p-6 mt-20 flex items-center justify-center">
           <Helmet>
                <title>Blogs | Green Tech </title>
            </Helmet>
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest Blog Posts</h1>
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-1">
              {post.date} | Written by <span className="font-medium">{post.author}</span>
            </p>
            <p className="text-gray-700 mt-2 whitespace-pre-line">{post.description}</p>
          </div>
        ))}
      </div>
          </div>
          <ServiceSection></ServiceSection>
    </div>
  );
};

export default BlogPage;
