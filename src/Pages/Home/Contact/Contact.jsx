import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-100 mt-10 mb-10 py-10 px-4">
      <motion.div
        className="flex flex-col-reverse max-w-screen-xl justify-between gap-8 mx-auto rounded-lg md:flex-row lg:flex-row md:px-12 lg:px-16 xl:px-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Form Section */}
        <motion.form
          className="space-y-6 flex-1 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full p-3 rounded-xl bg-orange-500 text-white font-semibold tracking-wide transition-all duration-300 shadow hover:bg-orange-600"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Info + Image Section */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-start flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight text-[#0D1B2A] lg:text-5xl">
              📬 Contact Us
            </h2>
            <p className="text-gray-600">
              Have any questions? Send us your message or opinion anytime!
            </p>
          </div>
          <motion.img
            src="https://i.ibb.co/m5VCBwz/NA-SEP-03.jpg"
            alt="Contact Illustration"
            className="h-52 md:h-64 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
