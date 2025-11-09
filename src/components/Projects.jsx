import React from "react";
import Swal from "sweetalert2";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = ()=> {

  const handleViewDetails = (title, description) => {
    Swal.fire({
      title: title,
      text: description,
      icon: "info",
      confirmButtonText: "Close",
      confirmButtonColor: "#FDC435",
      background: "#fff",
      color: "#25282B",
    });
  };

  return (
    <section className="flex flex-col  items-center justify-center w-full  py-16 px-4 sm:px-6 md:px-10 lg:px-20 gap-20 bg-white">

      <div className="flex  flex-col items-center gap-2 text-center">
        <h2 className="font-['Playfair_Display']  font-bold text-[36px] sm:text-[42px] md:text-[48px] text-[#25282B]">
          Projects
        </h2>
          <div className="w-[100px]  h-[4px] bg-[#FDC435] rounded-[2px]" />
      </div>


      <div className="flex flex-col md:flex-row w-full   max-w-[992px] h-auto shadow-[0px_6px_64px_rgba(112,144,176,0.1)] rounded-[24px] overflow-hidden">
        <div className="bg-white w-full   md:w-1/2 flex flex-col justify-center px-6 sm:px-10 py-10 gap-6">
           <h3 className="font-['Playfair_Display']  text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#25282B] leading-tight">
            Project Name
          </h3>
          <p className="font-['Nunito']  text-[16px] sm:text-[19px] text-[#828282] leading-[27px]">
            I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
          </p>
          <button
            onClick={() =>
              handleViewDetails(
                "Portfolio Interface Design",
                "A clean portfolio UI concept built in Figma to showcase minimal layout and responsive structure."
              )
            }
            className="h-[43px] border   border-[#25282B] text-[#25282B] text-[16px] sm:text-[17px] font-['Roboto'] font-medium px-6 py-2 rounded-[24px] w-[150px] hover:bg-[#25282B] hover:text-white transition"
          >
            View Project
          </button>
        </div>
        <img
          src={project1}
          alt="Project 1"
          className="w-full  md:w-1/2 h-[260px] sm:h-[400px] md:h-[524px] object-cover"
        />
      </div>


      <div className="flex flex-col   md:flex-row-reverse w-full max-w-[992px] h-auto shadow-[0px_6px_64px_rgba(112,144,176,0.1)] rounded-[24px] overflow-hidden">
        <div className="bg-white w-full md:w-1/2 flex flex-col  justify-center px-6 sm:px-10 py-10 gap-6">
          <h3 className="font-['Playfair_Display'] text-[28px]  sm:text-[32px] md:text-[40px] font-bold text-[#25282B] leading-tight">
            Project Name
          </h3>
          <p className="font-['Nunito']  text-[16px] sm:text-[18px] text-[#828282] leading-[27px]">
            What was your role, your deliverables, if the project was personal, freelancing.
          </p>
          <button
            onClick={() =>
              handleViewDetails(
                "Freelance Dashboard UI",
                "A responsive web dashboard interface to manage freelancers, project timelines, and analytics widgets."
              )
            }
            className="h-[43px]  border border-[#25282B] text-[#25282B] text-[16px] sm:text-[17px] font-['Roboto'] font-medium px-6 py-2 rounded-[24px] w-[150px] hover:bg-[#25282B] hover:text-white transition"
          >
            View Project
          </button>
        </div>
        <img
          src={project2}
          alt="Project 2"
          className="w-full md:w-1/2 h-[260px] sm:h-[400px] md:h-[524px] object-cover"
        />
      </div>
      <div className="flex flex-col  md:flex-row w-full max-w-[992px] h-auto shadow-[0px_6px_64px_rgba(112,144,176,0.1)] rounded-[24px] overflow-hidden">
        <div className="bg-white w-full  md:w-1/2 flex flex-col justify-center px-6 sm:px-10 py-10 gap-6">
          <h3 className="font-['Playfair_Display'] text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#25282B] leading-tight">
             Project Name
          </h3>
          <p className="font-['Nunito']  text-[16px] sm:text-[18px] text-[#828282] leading-[27px]">
              You can also add in this description the type of the project, if it was for web, mobile, electron.
          </p>
          <button
            onClick={() =>
              handleViewDetails(
                "Mobile App Concept",
                "Designed a modern  mobile app UI with consistent colors, icons, and smooth typography to enhance UX."
              )
            }
            className="h-[43px] border border-[#25282B] text-[#25282B] text-[16px] sm:text-[17px] font-['Roboto'] font-medium px-6 py-2 rounded-[24px] w-[150px] hover:bg-[#25282B] hover:text-white transition"
          >
            View Project
          </button>
        </div>
        <img
          src={project3}
          alt="Project 3"
          className="w-full md:w-1/2 h-[260px] sm:h-[400px] md:h-[524px] object-cover"
        />
      </div>
    </section>
  );
}
export default Projects;
