import { Helmet } from "react-helmet-async";

const ShippingPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen py-12 px-4 md:px-10">
      <Helmet>
        <title>Shipping Policy | Green Tech</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-[#0D1B2A] mb-4">📦 Shipping & Delivery Policy</h1>
        <p className="text-sm text-gray-500 text-center">Last updated February 01, 2023</p>

        <p>
          This Shipping & Delivery Policy is part of our Terms of Use (“Terms”) and should therefore be read alongside our main Terms:
          <a href="https://nagreentech.com/terms-of-use" className="text-green-600 underline ml-1" target="_blank" rel="noopener noreferrer">
            nagreentech.com/terms-of-use
          </a>
          .
        </p>

        <p>
          Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.
        </p>

        <h2 className="text-xl font-semibold text-[#0D1B2A] mt-6">🚚 What are my shipping & delivery options?</h2>
        <p className="text-gray-700">
          <strong>Free Shipping:</strong> We offer free standard shipping on all orders.
        </p>

        <h2 className="text-xl font-semibold text-[#0D1B2A] mt-6">🌍 Do you deliver internationally?</h2>
        <p className="text-gray-700">
          Yes, we offer worldwide shipping. Free standard shipping is valid on international orders.
        </p>
        <p className="text-gray-700">
          Please note that some international deliveries may be subject to local rules, taxes, or duties beyond our control. You are responsible for complying with local laws and for any such additional costs.
        </p>

        <h2 className="text-xl font-semibold text-[#0D1B2A] mt-6">⏳ What happens if my order is delayed?</h2>
        <p className="text-gray-700">
          If delivery is delayed, we’ll notify you as soon as possible with a revised estimated delivery date.
        </p>
        <p className="text-gray-700">
          <strong>Note for EU and UK consumers:</strong> This does not affect your statutory rights. Please see our Terms for more info.
        </p>

        <h2 className="text-xl font-semibold text-[#0D1B2A] mt-6">🔁 Questions about returns?</h2>
        <p className="text-gray-700">
          Please refer to our Return Policy:
          <a href="https://nagreentech.com/refund_returns" className="text-green-600 underline ml-1" target="_blank" rel="noopener noreferrer">
            nagreentech.com/refund_returns
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-[#0D1B2A] mt-6">📞 How can you contact us about this policy?</h2>
        <p className="text-gray-700">
          If you have any questions or comments, feel free to reach out:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Email: <a href="mailto:greentcstore@gmail.com" className="text-green-600 underline">greentcstore@gmail.com</a></li>
          <li>Online contact form: <a href="https://nagreentech.com/contact-us" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">nagreentech.com/contact-us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ShippingPolicy;
