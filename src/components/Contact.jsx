import React, { useState } from "react";
import Insta from "../assets/Instagram.png";
import Ldin from "../assets/LinkedIn.png";
import mail from "../assets/Mail.png";
import lebg from "../assets/le-bg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ()=> {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success(
      `Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="relative w-full  bg-[#F9FAFF] flex flex-col items-center justify-between overflow-hidden pt-10 pb-60 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="flex   flex-col items-center gap-2 text-center mt-6">
        <h2 className="font-['Playfair_Display']  font-bold text-[32px] sm:text-[40px]  md:text-[48px] text-[#25282B] leading-tight">
          Projects
      </h2>
        <div className="w-[70px] sm:w-[90px]  md:w-[100px] h-[4px] bg-[#FDC435] rounded-md"></div>
      </div>


      <div className="flex flex-col  items-center mt-12 gap-8 w-full max-w-[500px] bg-white p-6 sm:p-8 rounded-xl shadow-md z-10">
        <form onSubmit={handleSubmit} className="flex flex-col  gap-6 w-full">
          <div className="flex flex-col gap-2">
          <label className="text-[#25282B]  font-['Nunito'] font-semibold text-[16px]">
              Name
            </label>
          <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[44px] border border-[#E8ECF4] rounded-[8px] px-3 text-[16px] font-['Nunito'] focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
            />
          </div>

          <div className="flex flex-col  gap-2">
            <label className="text-[#25282B] font-['Nunito']  font-semibold text-[16px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[44px] border border-[#E8ECF4] rounded-[8px] px-3 text-[16px] font-['Nunito'] focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
            />
        </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#25282B]  font-['Nunito'] font-semibold text-[16px]">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border  border-[#E8ECF4] rounded-[8px] p-3 text-[16px] font-['Nunito'] resize-none focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-end bg-[#FDC435] rounded-[8px] px-6 py-2 text-[#25282B] text-[18px] font-['Roboto'] font-medium hover:brightness-95 transition"
          >
            Send
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center gap-6 mt-12 z-10">
        <div className="flex flex-row items-center justify-center gap-6">
          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
            <img src={Insta} alt="Instagram" className="brightness-50  hover:opacity-80" />
          </a>
          <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
            <img src={Ldin} alt="LinkedIn" className="brightness-50 hover:opacity-80" />
          </a>
          <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
            <img src={mail} alt="Gmail" className="brightness-50 hover:opacity-80" />
          </a>
        </div>
        <p className="text-[#828282] font-['Nunito'] text-[14px] sm:text-[16px]">
          Madelyn Torff 2021
        </p>
      </div>
      <img
        src={lebg}
        alt="footer-bg"
        className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
      />
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </footer>
  );
}
export default Contact;