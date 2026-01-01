import { div } from "framer-motion/client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    // You can integrate your backend API here
    toast.success(`Subscribed successfully with ${email}`);
    setEmail("");
  };

  return (
    <div className="p-4">
      <section className="bg-linear-to-b from-[#131314]  to-[#090909] text-white py-16 px-4 border-2 border-purple-500 sm:w-[1440px] md:w-[1200px] md:ml-30  lg:mx-auto  rounded-xl mt-20 mb-10 ">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Subscribe to our Newsletter</h2>
        <p className="text-gray-200 text-lg">
          Get the latest updates, game releases, and special offers right in your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-72 px-4 py-3 rounded-md text-white focus:outline-none border-2"
            required
          />
          <button
            type="submit"
            className="cursor-pointer px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <ToastContainer/>
      </div>
    </section>
    </div>
  );
};

export default Newsletter;
