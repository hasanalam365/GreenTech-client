import React from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
  return (
    <div className="mt-24 px-4 md:px-10 lg:px-20 py-10 bg-[#f9f9f9] min-h-screen text-[#0D1B2A]">
      <Helmet>
        <title>Refund & Returns Policy </title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-green-700">Refund & Returns Policy</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Last updated February 01, 2024</p>

        <section className="space-y-4 text-[17px] leading-relaxed">
          <p>
            Thank you for your purchase from <strong>nagreentech.com</strong>. We hope you are happy with your purchase. However, if
            you are not completely satisfied, you may return it for a full refund. Please see below for more information on our return policy.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-[#0D1B2A]">Returns</h2>
          <p>
            All returns must be postmarked within <strong>thirty (30) days</strong> of the purchase date. All returned items
            must be in new and unused condition, with all original tags and labels attached.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-[#0D1B2A]">Return Process</h2>
          <p>Please contact us first:</p>
          <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
            <p><strong>Green Tech Store</strong></p>
           
            <p>📧 greentcstore@gmail.com</p>
          </div>
          <p className="mt-2">
            You may also use the prepaid shipping label enclosed with your package. Return shipping charges will be paid or reimbursed by us.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-[#0D1B2A]">Refunds</h2>
          <p>
            After receiving your return and inspecting the item’s condition, we will process your refund. Please allow
            at least <strong>ten (10) days</strong> from the date we receive your item. Refunds may take 1–2 billing cycles to
            appear on your credit card statement, depending on your provider. We will notify you via email once your return is processed.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-[#0D1B2A]">Exceptions</h2>
          <p>
            For defective or damaged products, please contact us at the contact information above to arrange a refund or exchange.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-[#0D1B2A]">Questions</h2>
          <p>If you have any questions about our return policy, please contact us:</p>
          <div className="bg-gray-100 p-4 rounded-md border border-gray-200 mt-2">
            
            <p>📧 greentcstore@gmail.com</p>
            <p>🌐 <a href="https://nagreentech.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">nagreentech.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
