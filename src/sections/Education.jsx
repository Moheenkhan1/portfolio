import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import sgbit from "../assets/sgbit.jpeg";
import kle from "../assets/kle.png";
import forbes from "../assets/forbes.png";
import EarthCanvas from "../components/canvas/Earth";

const Education = () => {
  return (
    <div id='Education' className="min-h-[100vh] w-full text-white text-center   mt-10">
      <h1 className="text-[2.5rem] md:text-[3.5rem] font-[Anton SC] font-extrabold">
        Education
      </h1>
      <p className="text-base md:text-lg text-[#A2A3B1] font-semibold mt-2">
        My Education has been a journey of self-discovery and growth. My Education details are as follows.
      </p>

      <div className="mt-10">
        <VerticalTimeline>
          {/* College */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#111626",
              height: "auto",
              border: "2px solid #4a548a",
              borderBottom: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #4a548a" }}
            date={<span className="mr-[15rem] text-base md:text-lg font-bold">June 2022 - June 2026</span>}
            iconStyle={{
              background: "#111626",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
            icon={<img src={sgbit} className="h-full w-full object-cover" />}
          >
            <div className="flex  justify-start flex-wrap items-center w-full gap-0">
              <div className="w-20 h-20 md:w-24 md:h-24">
                <img src={sgbit} alt="" className="w-full h-full rounded-lg" />
              </div >
              <div className=" flex flex-col text-white text-start">
                <p className="text-base md:text-lg font-semibold">
                  S.G Balekundri Institute of Technology, Belagavi
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-bold">
                  Bachelor of Engineering: Computer Science and Business Systems
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-bold">
                  June 2022 - June 2026
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5 ml-2 text-sm md:text-base">
              <span className="font-bold">Grade:</span> <span>8.0 CGPA</span>
            </div>
            <div className="text-start ml-2 text-sm md:text-base">
              <p>
                I am currently pursuing my Bachelor's degree in Computer Science and Business Systems at S.G Balekundri Institute of Technology, Belgaum. I have completed 5 semesters with a CGPA of 8.0. I have taken subjects like JAVA, Data Structures, and Computer Networks while continuously upgrading my skills.
              </p>
            </div>
          </VerticalTimelineElement>

          {/* PUC */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#111626",
              height: "auto",
              border: "2px solid #4a548a",
              borderBottom: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #4a548a" }}
            date={<span className="text-base md:text-lg font-bold">June 2020 - June 2022</span>}
            iconStyle={{
              background: "#111626",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
            icon={<img src={kle} className="h-full w-full object-cover" />}
          >
            <div className="flex flex-wrap items-center w-full gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24">
                <img src={kle} alt="" className="w-full h-full rounded-lg" />
              </div>
              <div className="text-white text-left">
                <p className="text-base md:text-lg font-semibold">
                  KLE's C.S Angadi PU College, Gokak
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-bold">PUC: Science</p>
                <p className="text-xs md:text-sm text-gray-400 font-bold">June 2020 - June 2022</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5 ml-2 text-sm md:text-base">
              <span className="font-bold">Percentage:</span> <span>78%</span>
            </div>
            <div className="text-start ml-2 text-sm md:text-base">
              <p>I completed my class 12 high school education at KLE's C.S Angadi PU College, Gokak, specializing in Science.</p>
            </div>
          </VerticalTimelineElement>

          {/* School */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#111626",
              height: "auto",
              border: "2px solid #4a548a",
              borderBottom: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #4a548a" }}
            date={<span className="mr-[15rem] text-base md:text-lg font-bold">June 2010 - June 2020</span>}
            iconStyle={{
              background: "#111626",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
            icon={<img src={forbes} className="h-full w-full object-cover" />}
          >
            <div className="flex flex-wrap items-center w-full gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24">
                <img src={forbes} alt="" className="w-full h-full rounded-lg" />
              </div>
              <div className="text-white text-left">
                <p className="text-base md:text-lg font-semibold">
                  The Forbes Academy (CBSE), Gokak Falls
                </p>
                <p className="text-xs md:text-sm text-gray-400 font-bold">CBSE</p>
                <p className="text-xs md:text-sm text-gray-400 font-bold">June 2010 - June 2020</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5 ml-2 text-sm md:text-base">
              <span className="font-bold">Percentage:</span> <span>85%</span>
            </div>
            <div className="text-start ml-2 text-sm md:text-base">
              <p>I completed my class 10 education at The Forbes Academy, Gokak Falls, a CBSE school in our city.</p>
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
          <div className="mt-10 " >

          <EarthCanvas/>
          </div>
      </div>
    </div>
  );
};

export default Education;
