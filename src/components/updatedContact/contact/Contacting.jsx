"use client"

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contacting = () => {
  
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />

      <div className="px-5 py-14 flex flex-col md:flex-row items-center justify-center">
        
        <div className="md:w-1/2 md:order-2">
          <img src="/assets/Contact/cont.png" alt="Contact Image" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:order-1">
          <h2 className="text-center text-2xl font-bold text-black mt-1 mb-5 md:mb-5">
            CONTACT US
          </h2>
          <h3 className="text-center text-sm font-bold text-blue mt-1 mb-5 md:mb-5">
            We offer cost-effective solutions from unique components to OEM parts through a vast supplier network. Committed to innovation, we invest in R&D to lead in technology. Our customer-focused approach aims to exceed expectations and build lasting partnerships.
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex text-black flex-col gap-5 md:px-20"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="subject"
              name="user_subject"
              placeholder="Subject"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button className="btn self-start bg-black text-gray-800 hover:bg-blue hover:text-white transform transition-transform duration-300 hover:scale-105 py-3 px-6 shadow-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacting;
