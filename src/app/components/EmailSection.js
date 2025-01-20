"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function EmailSection() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData("Sending....");
    const submitData = new FormData(event.target);

    submitData.append("access_key", "8c080658-a610-4de8-9bb2-1a6653d31e3d");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Error", data);
        setFormData(data.message);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 -left-1 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/UmeshHargane007/">
            <Image
              src="/images/github.png"
              alt="Git Hub Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/umesh-hargane-844939237">
            <Image
              src="/images/linkedin.png"
              alt="linkedin Icon"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              required
              placeholder="abc@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-400 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handlechange}
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-400 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handlechange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk...."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
