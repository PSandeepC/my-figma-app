import React from "react";
import homeImg from "../assets/homeImg.png";
import { useNavigate } from "react-router-dom";

const Home = ()=> {
  const navigate = useNavigate();

  return (
    <section className="relative w-full   min-h-screen bg-[#F9FAFF] flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden pl-6 pb-10 sm:pl-10 md:pl-16 lg:pl-24">
      <div className="absolute top-0  right-0  z-0">
        <img
          src={homeImg}
          alt="Madelyn Torff"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10   flex flex-col items-start gap-6 text-left w-full md:w-1/2 pt-20 md:pt-0">
        <p className="text-[#FDC435]  font-['Nunito'] font-bold uppercase text-[18px] sm:text-[20px]">
          UI/UX Designer
        </p>

         <h1 className="font-['Playfair_Display']  font-bold text-[#333333] text-[40px] sm:text-[50px] md:text-[64px] leading-tight">
          Hello, my name <br />
          <span className="block md:inline ">is Madelyn Torff</span>
        </h1>

        <p className="font-['Nunito'] text-[#828282] text-[18px]   sm:text-[25px] leading-relaxed max-w-[500px]">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>

        <div className="flex flex-row items-center gap-4 mt-4">
          <button
            onClick={() =>  navigate("/projects")}
            className="bg-[#FDC435] text-[#25282B]  font-['Roboto'] font-medium text-[18px] rounded-lg px-6 py-2 hover:brightness-95 transition"
          >
            Projects
          </button>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2  border-[#25282B] text-[#25282B] font-['Roboto'] font-medium text-[18px] rounded-lg px-6 py-2 hover:bg-[#25282B] hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
export default Home;