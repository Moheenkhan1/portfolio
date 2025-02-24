import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRocket } from "react-icons/fa";
import sgbit  from '../assets/sgbit.jpeg'
import kle  from '../assets/kle.png'
import forbes  from '../assets/forbes.png'
import { img } from 'framer-motion/client';
import { color } from 'framer-motion';

const Education = () => {
  return (
    <div className=' min-h-[100vh] w-full text-white text-center ' >
        <h1 className=" text-[3rem] md:text-[3.5rem] font-[Anton SC] font-extrabold " >Education</h1>
        <p className="text-lg text-[#A2A3B1] font-semibold mt-2">My Education has been a journey of self-discovery and growth. My Education details are as follows.</p>
    <div className=' mt-15 ' >
    <VerticalTimeline >
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#111626" ,height:'45vh',border:' 2px solid #4a548a ', borderBottom:'none'  }}
        contentArrowStyle={{ borderRight: "7px solid  #4a548a" }}
        date={<span style={{ marginLeft:'-16rem', fontWeight: "bold", fontSize: "1.2rem" }}>June 2022 - June 2026</span>}
        iconStyle={{ background: "#111626", color: "#fff", display:'flex', alignItems:'center', justifyContent:'center',overflow:'hidden' }}
        icon={ 
            <img src={sgbit} className=' h-[100%] w-[100%]  ' />
         }
      >
        <div className='flex items-center h-[20%] w-[100%] ' >
            <div className=' h-[100%] w-[18%]  ' > <img src={sgbit} alt="" className=' h-[100%] w-[100%] rounded-lg ' /> </div>
            <div className='text-white mt-[-25px]  '>
                <p style={ { fontSize:'1.1rem', marginLeft:'5px', textAlign:'start' } } > S.G Balekundri Institute of Technology , Belgavi </p>
                <p style={ { fontSize:'0.7rem', color:'gray',fontWeight:'800',lineHeight:'0.1rem' , marginLeft:'5px', textAlign:'start' }} >Bachelor of Engineering : Computer Science and Business Systems</p>
                <p style={ { fontSize:'0.7rem', color:'gray',fontWeight:'800',lineHeight:'0.1rem' , marginLeft:'5px', textAlign:'start' }}  >June 2022 - June 2026</p>
            </div>
        </div>
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#111626", color: "#fff" ,height:'45vh',border:' 2px solid #4a548a ', borderBottom:'none'  }}
        contentArrowStyle={{ borderRight: "7px solid  #4a548a" }}
        date="June 2020 - June 2022"
        iconStyle={{ background: "#111626", objectFit:'cover', color: "#fff", display:'flex', alignItems:'center', justifyContent:'center',overflow:'hidden' }}
        icon={ 
            <img src={kle} className=' h-[100%] w-[100%]  ' />
         }
      >
        <h3 className="vertical-timeline-element-title">Project Launched</h3>
        <p>Successfully deployed the real-time chat application.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#111626", color: "#fff" ,height:'45vh',border:' 2px solid #4a548a ', borderBottom:'none'  }}
        contentArrowStyle={{ borderRight: "7px solid  #4a548a" }}
        date="June 2010 - June 2020"
        iconStyle={{ background: "#111626", color: "#fff", display:'flex', alignItems:'center', justifyContent:'center',overflow:'hidden' }}
        icon={ 
            <img src={forbes} className=' h-[100%] w-[100%]  ' />
         }
      >
        <h3 className="vertical-timeline-element-title">Project Launched</h3>
        <p>Successfully deployed the real-time chat application.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>


    </div>
  )
}

export default Education