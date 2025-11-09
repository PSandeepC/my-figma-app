import React, { useRef, useState } from "react";
import profile from "../assets/profile.png";
import Contact from "./Contact.jsx";

const About = ()=> {
  const fileInputRef = useRef(null);
  const [resumeFile, setResumeFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      alert(`Uploaded: ${file.name}`);
    }
  };

  return (
    <>
      <section className="flex flex-col   md:flex-row items-center justify-between bg-[#F9FAFF] min-h-screen px-6 md:px-[120px] py-20 md:py-[120px] gap-16 md:gap-0">
        <div className="flex flex-col gap-8 max-w-[590px]">
          <h2 className="font-['Playfair_Display']  text-[#333333] text-[40px] md:text-[48px] font-bold leading-[130%]">
            About me
          </h2>
          <p className="font-['Nunito']  text-[#828282] text-[24px] md:text-[24px] leading-[150%]">
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque
            auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed.
            Aliquet risus posuere aliquet imperdiet sit.
          </p>

          
        <div>
            <button
              onClick={handleButtonClick}
              className="bg-[#FDC435] rounded-[8px] px-8 py-2 text-[#25282B] text-[18px] font-['Roboto'] font-medium hover:brightness-95 transition w-[144px] h-[43px] flex items-center justify-center"
            >
              Resume
          </button>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            {resumeFile && (
              <p className="mt-3  text-[#25282B] text-[14px] font-['Nunito']">
                Selected: {resumeFile.name}
              </p>
            )}
          </div>
        </div>

        <div className="relative  w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[524px] md:h-[524px] flex items-center justify-center">
          <div className="absolute  inset-0 bg-[#FDC435] rounded-full"></div>
          <img
            src={profile}
            alt="Madelyn Torff"
            className="absolute  w-full h-full rounded-full object-cover"
          />
      </div>
  </section>
      <div className="w-full">
        <Contact />
      </div>
    </>
  );
}
export default About;
