import React from 'react';

function Spread() {
  return (
    <div className='w-full h-screen bg-[#fff] text-black'>
        <div className="max-w-screen-xl mx-auto">
            <div className="media flex justify-center gap-3">
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

                <h1 className='text-[3.8vw] sm:text-[1.02vw] font-[500]'>In the media</h1>
            </div>

            <div className="headingCenter font-[Lausanne_300] leading-[0.9] sm:leading-[1] mt-14 sm:mt-[2vw] flex flex-col text-center">
                <h1 className='text-[16vw] sm:text-[10vw] font-[400] tracking-tight'>Spread</h1>
                <h1 className='text-[16vw] sm:text-[10vw] font-[400] tracking-tight'>the News</h1>
            </div>

            <div className="paras flex sm:hidden flex-col items-center justify-center leading-[1.2] mt-14">
                <p className='text-[5vw] tracking-tight'>Find out more about our work</p>
                <p className='text-[5vw] tracking-tight'>on these leading design and</p>
                <p className='text-[5vw] tracking-tight'>technology platforms.</p>
            </div>

            <div className="paras flex flex-col items-center justify-center leading-[1.3] mt-[4vw]">
                <p className='sm:text-[1.75vw]  tracking-tight'>Find out more about our work on these</p>
                <p className='sm:text-[1.75vw]  tracking-tight'>leading design and technology platforms.</p>
            </div>

            <button className="font-[500] flex text-center mx-auto mt-[9vw] sm:mt-[3.4vw]">
                <p className="text-[4.45vw] sm:text-[1.1vw] text-black font-[400] border-zinc-400 border-b-[.7px] sm:border-b-[.5px]">Browse all news</p>
            </button>
        </div>
    </div>
  )
}

export default Spread;