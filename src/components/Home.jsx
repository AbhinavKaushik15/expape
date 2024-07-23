import { easeInOut, motion } from "framer-motion";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

function Home() {

  const parent = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger: parent.current,
      
    } 
  })

  return (
    <div ref={parent} className="relative w-full h-[160vh] sm:h-[178.8vh] md:h-[240vh] xl:h-[299.4vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1.6"
          className="w-full h-full object-cover sm:object-center"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="landingtext absolute top-0 max-w-screen-xl h-full mx-auto px-7 sm:px-10 text-white">
        <div className="parasSmall sm:hidden mt-[90%] leading-5">
          {[
            "Global digital design studio partnering",
            "with brands and businesses that create",
            "exceptional experiences where people",
            "live, work, and unwind.",
          ].map((item, index) => {
            return (
              <p key={index} className="font-[400] overflow-hidden">
                <motion.span
                  initial={{ rotate: 20, translateY: "50%", opacity: 0 }}
                  animate={{ rotate: 0, translateY: 0, opacity: 1 }}
                  transition={{
                    ease: [0.33, 1, 0.68, 1],
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            );
          })}
        </div>

        <div className="parasBig hidden sm:flex sm:flex-col sm:mt-[40vh] md:mt-[53.5vh] xl:mt-[66.5vh] sm:px-[3vw] md:px-[4.5vw] xl:ml-[0.72vw] leading-[2.21vw]">
          {[
            "Global digital design studio partnering with",
            "brands and businesses that create exceptional",
            "experiences where people live, work, and unwind.",
          ].map((item, index) => {
            return (
              <p
                key={index}
                className="text-[1.7vw] font-[500] w-fit tracking-tight overflow-hidden font-[Times_New_Roman]"
              >
                <motion.span
                  initial={{ rotate: 20, translateY: "50%", opacity: 0 }}
                  animate={{ rotate: 0, translateY: 0, opacity: 1 }}
                  transition={{
                    ease: [0.33, 1, 0.68, 1],
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            );
          })}
        </div>

        <div className="headingSmall sm:hidden text-5xl tracking-wide mt-5">
          {["Digital", "Design", "Experience"].map((item, index) => {
            return (
              <h1 key={index} className="font-[500] py-2 -mt-4 overflow-hidden">
                <motion.span
                  initial={{ rotate: 30, translateY: "90%", opacity: 0 }}
                  animate={{ rotate: 0, translateY: 0, opacity: 1 }}
                  transition={{
                    ease: easeInOut,
                    duration: 0.7,
                    delay: 1 + index * 0.05,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            );
          })}
        </div>

        <div className="headingBig hidden sm:flex flex-col text-5xl sm:px-[1.5vw] md:px-7 xl:ml-[1.4vw] sm:mt-[14vh] md:mt-[16.5vh] xl:mt-[18.3vh] leading-[16vw]">
          {["Digital", "Design", "Experience"].map((item, index) => {
            return (
              <h1 key={index} className="font-[400] text-[17.2vw] tracking-tighter py-10 -mt-20 overflow-hidden">
                <motion.span
                  key={index}
                  initial={{ rotate: 30, translateY: "50%", opacity: 0 }}
                  animate={{ rotate: 0, translateY: 0, opacity: 1 }}
                  transition={{
                    ease: easeInOut,
                    duration: 0.7,
                    delay: 1 + index * 0.1,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            );
          })}
        </div>

        <div className="downArrow mt-7 sm:hidden">
          <FiArrowDown className="text-md" />
        </div>

        <div className="para2Small sm:hidden mt-[25px] leading-[1.3]">
          <p className="font-[400]">We help experience-driven companies</p>
          <p className="font-[400]">thrive by making their audience feel the</p>
          <p className="font-[400]">refined intricacies of their brand and</p>
          <p className="font-[400]">product in the digital space.</p>
          <p className="font-[400]">Unforgettable journeys start with a</p>
          <p className="font-[400]">click.</p>
        </div>

        <div className="para2Big hidden sm:flex flex-col w-full sm:mt-[5vh] md:mt-[10vh] xl:mt-[14.5vh] leading-[2.21vw] sm:px-[3vw] md:px-[4.5vw] xl:px-[5vw]">
          <p className="font-[400] text-[1.7vw] tracking-tight">
            We help experience-driven companies thrive
          </p>
          <p className="font-[400] text-[1.7vw] tracking-tight">
            by making their audience feel the refined
          </p>
          <p className="font-[400] text-[1.7vw] tracking-tight">
            intricacies of their brand and product in the
          </p>
          <p className="font-[400] text-[1.7vw] tracking-tight">
            digital space. Unforgettable journeys start
          </p>
          <p className="font-[400] text-[1.7vw] tracking-tight">
            with a click.
          </p>
        </div>

        <button className="underline font-[500] mt-6 sm:px-[3vw] md:px-[4.5vw] sm:mt-[8vh] md:mt-[6vw] xl:mt-20 flex items-center -ml-[10px] xl:px-[5vw]">
          <span className="inline-block h-2 w-2 sm:h-[5.5px] sm:w-[5.5px] rounded-full border-[0.3px] border-[#dadada]"></span>
          <p className="ml-1 sm:text-[1.1vw]">The Studio</p>
        </button>

        <div className="box h-[10.5vw] hidden sm:flex md:flex w-[23vw] absolute sm:-right-5 md:-right-10 xl:-right-6 sm:bottom-[12vw] md:bottom-[12vw] xl:bottom-[11.5vw] justify-between">
          <div className="links flex flex-col gap-2 sm:gap-1 leading-[1.5vw]">
            <a className="text-[1.1vw] font-[500]" href="#">
              Work
            </a>
            <a className="text-[1.1vw] font-[500]" href="#">
              Studio
            </a>
            <a className="text-[1.1vw] font-[500]" href="#">
              News
            </a>
            <a className="text-[1.1vw] font-[500]" href="#">
              Contact
            </a>
          </div>

          <div className="mail">
            <a className="text-[1.1vw]" href="#">
              hello@exoape.com
            </a>
            <h1 className="text-[1.1vw] mt-1">+31 772 086 200</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
