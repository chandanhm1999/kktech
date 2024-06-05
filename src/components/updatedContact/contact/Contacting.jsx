"use client";

import { createElement, useRef } from "react";
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
          toast.success("Email send Successfully");
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

      <div className="px-5 py-14">
        <h2 className="text-center text-2xl font-bold text-black mt-1 mb-5 md:mb-5">
          CONTACT US
        </h2>
        <h3 className="text-center text-3xl font-bold text-blue mt-1 mb-5 md:mb-5">
          Reach out for a new project or just say hello
        </h3>

        <div>
          <h6 className="subtitle md:px-20" data-aos="fade-down">
            Hii
          </h6>
          <br />
          <div className="flex gap-10 md:flex-row flex-col">
            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-up"
              className="flex-1 flex flex-col gap-5 md:px-20"
            >
              {/* Input Name as same as email js templates values */}
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
                className="border border-black-600 p-3 rounded"
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
            <div className="flex-1 flex flex-col gap-3 ">
              <h6 className="md:px-2 flex items-start text-blue">
                CONTACT INFO
                We offer cost-effective solutions from unique components to OEM parts through a vast supplier network. Committed to innovation, we invest in R&D to lead in technology. Our customer-focused approach aims to exceed expectations and build lasting partnerships.
              </h6>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacting;
