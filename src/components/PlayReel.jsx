import { easeIn } from 'framer-motion';
import gsap, { Power4, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

function PlayReel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const playBig = useRef(null);
  const reelBig = useRef(null);

  const videodivSm = useRef(null);
  const playSm = useRef(null);
  const reelSm = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      }
    })
    tl.to(videodiv.current, {
      width: "197.3%",
      height: "100%",
    }, 'a'),
    tl.to(videodivSm.current, {
      width: "100%",
    }, 's'),
    tl.to(playBig.current, {
      x: '100%',
      ease: easeIn,
    }, 'a')
    tl.to(playSm.current, {
      x: '-122%',
      ease: easeIn,
    }, 's')
    tl.to(reelBig.current, {
      x: '-100%',
      ease: easeIn,
    }, 'a')
    tl.to(reelSm.current, {
      x: '122%',
      ease: easeIn,
    }, 's')
  })

  return (
    <div ref={parent} className='w-full h-screen bg-[#0D0E13]'>
        <div className='relative max-w-screen-sm mx-auto h-full text-white flex flex-col justify-between py-[22.5vw] sm:py-[3.8vw]'>
          <div className="centerHeading w-full z-[1] flex items-center justify-center gap-2">
            <svg
          className="w-[3vw] sm:w-[0.9vw]"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path
        d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
        fill="currentColor"
        data-v-669b4a84=""
        ></path>
            </svg>

            <p className='text-[3.6vw] sm:text-xs font-[500] sm:font-[600]'>Work in motion</p>
          </div>

          <div className="centerPlayReelSm flex sm:hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[999] items-center justify-center gap-[25vw]">
            <h1 ref={playSm} className='text-[16vw] sm:text-[10vw] font-[400]'>Play</h1>
            <h1 ref={reelSm} className='text-[16vw] sm:text-[10vw] font-[400]'>Reel</h1>
          </div>

          <div className="centerPlayReelBig hidden sm:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[999] items-center justify-center gap-[40vw]">
            <h1 ref={playBig} className='text-[16vw] sm:text-[10vw] font-[400]'>Play</h1>
            <h1 ref={reelBig} className='text-[16vw] sm:text-[10vw] font-[400]'>Reel</h1>
          </div>

          <div ref={videodivSm} className="bgVideo flex sm:hidden absolute sm:w-[24vw] sm:h-[11.8vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video">
            <video muted loop autoPlay className='w-full h-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
          </div>

          <div ref={videodiv} className="bgVideo hidden sm:flex absolute sm:w-[24vw] sm:h-[11.8vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video">
            <video muted loop autoPlay className='w-full h-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
          </div>

          <div className="bottomPara flex flex-col z-[1] items-center justify-center font-[500]">
            <p className='text-[3.7vw] sm:text-xs'>Our work is best experienced in motion. Don't</p>
            <p className='text-[3.7vw] sm:text-xs'>forget to put on your headphones.</p>
          </div>
        </div>
    </div>
  )
}

export default PlayReel;