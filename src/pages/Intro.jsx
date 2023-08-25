import Navbarr from "../addons/Navbarr";
import resume from "../assets/Jayavardhan_resume.pdf";
import React from "react";
import { useTypewriter, Cursor} from 'react-simple-typewriter';
function MainPage() {
    // const {text} = useTypewriter({
    //     words:['Coder','Devloper','Jayavardhan'],
    //     loop:{},
    // });
    return(
        
        // <div>
            
        //     <script src="https://unpkg.com/typewriter-effect@2.3.1/dist/core.js"></script>
        // <Navbarr/>
        // <div>
        //     <section class="relative w-full  min-h-[90vh] py-28 flex flex-col text-center items-center justify-center  sm:px-14 overflow-x-hidden isolate max-w-[calc(1234px + 56px * 2)] gap-4 md:gap-6 px-4 pt-8 md:pt-12 pb-8">
        //     <h1 class="text-black items-center text-6xl font-display font-semibold">
        //     Coding with the precision of Sherlock</h1><h2 class="text-black items-center text-6xl font-display font-semibold"> and the creativity of Picasso.
        //     </h2>
        //     </section>
        // </div>
        // </div>
        <div class="bg-gray-50">
            {/* <Navbarr/> */}
        <section class="relative w-full  min-h-[100vh] py-28 flex flex-col text-center items-center justify-center  sm:px-14 overflow-x-hidden isolate max-w-[calc(1234px + 56px * 2)] gap-4 md:gap-6 px-4 pt-8 md:pt-12 pb-8" >
            <p class="items-center text-[#888] text-[max(15px,min(2vw,20px))] leading-[1.8] font-semibold z-[1] p-[42px] left-1 px-18 text-xl">
            <h1 class="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance text-[#888] text-[max(15px,min(2vw,20px))] leading-[1.8]  z-[1] p-[24px] left-1 text-base">Hello there..! I’m</h1>
            <div class="animate-bounce ">
            <h1 class="text-black items-center text-6xl font-display   dark:bg-gradient-to-b md:mt-2 dark:from-white dark:to-[#adadad] bg-gradient-to-b from-[#555] to-[#000] text-transparent bg-clip-text font-extrabold text-[max(48px,min(5vw,76px))] leading-[1.2] tracking-tighter p-[24px]">
            Jayavardhan<span class="text-blue-600 "> J</span>
            </h1>
            </div>
            <p class="text-[#888] text-[max(15px,min(2vw,20px))] leading-[1.8] font-semibold z-[1] p-[42px] left-1 px-18 text-xl">
                <span class="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance items-center p-18 text-base"> a passionate software devloper and development enthusiast, relentlessly pushing boundaries to transform visions into reality.<br></br> Explore my <span class="text-black text-base"> portfolio</span> , where each pixel reveals my journey.
                </span>
                
                </p>
                <div class="flex w-full items-center justify-center p-[24px]  space-x-12 ">
                
                <a class=" hover:scale-125 text-white bg-black inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow darki:hover:bg-background/90 h-9 px-4 py-2 dark:bg-foreground dark:text-background no-underline" download="Jayavardhan_resume" target="_blank" href={resume}><span class="mr-1 animate-waving-hand">📜 </span> Download CV</a>
                <a class=" hover:scale-125 bg-white text-black inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow darki:hover:bg-background/90 h-9 px-4 py-2 dark:bg-foreground dark:text-background no-underline" href="contact"><span class="mr-1 animate-waving-hand">👋🏻 </span> Contact Me</a>
                </div>
            </p>
            
        </section>
        </div>

    );
}

export default MainPage;