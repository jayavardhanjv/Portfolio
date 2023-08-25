import { useState, useEffect } from "react";
import llogo from "../addons/logos/bblogo.png"
import dlogo from "../addons/logos/wlogo.png"
import handgif from "../addons/logos/hand.gif"
import Switcher from "../addons/Switcher"
function Navbarr() {
    return(
        <header class="supports-backdrop-blur:bg-background/60 sticky backdrop-blur-[5px] top-0 z-40 w-full    dark:bg-background/60 shadow-sm dark:shadow-neutral-800">
        <nav class="bg-white border-white-100 dark:border-white-100 dark:border-white-100  justify-center items-center  supports-backdrop-blur:bg-background/60 sticky backdrop-blur-[5px] z-20     dark:bg-black shadow-sm dark:shadow-neutral-200">
            <div>
            <div class="max-w-screen-xl  justify-between mx-auto  container flex h-14 items-center px-1 sm:px-3 lg:px-4 hover:text-gray-500 dark:hover:text-gray-500">
                <a href="/" class="flex justify-start items-center hover:scale-150 scale-120 hover:text-gray-500 dark:hover:text-gray-500 space-x-2 overflow-visible z-40" title="Jv.dev logo">
                    <img v-show="$colorMode.value === 'light'" src={llogo} class="flex h-16 w-auto max-w-full hover:text-gray-500 dark:hover:text-gray-500  dark:text-foreground mr-3 sm:mr-5  items-center space-x-2 overflow-visible z-40" alt="JV.dev logo" />
                    {/* <img v-show="$colorMode.value === 'dark'" src={dlogo} class="h-16 max-w-full hover:text-gray-500 dark:hover:text-gray-500" alt="JV.dev logo" /> */}
                </a>
                <div class="flex md:order-2 items-center">
                <button data-collapse-toggle="navbar-solid-bg" type="button" class="invisible inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-black dark:text-black dark:hover:bg-text-black dark:focus:ring-black" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto items-center justify-center" id="navbar-solid-bg">
      <ul class="flex flex-col font-semibold mt-3 rounded-lg items-center justify-center bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-text-white">
        <li>
          <a href="/#about" class="font-semibold border-text-black no-underline	 dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 text-black dark:text-white">About</a>
        </li>
        <li>
          <a href="/#projects" class="hover:text-gray-500 border-text-black no-underline	 dark:hover:text-gray-500 font-semibold hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 text-black dark:text-white">Projects</a>
        </li>
        <li>
          <a href="/#contact" class="hover:text-gray-500 border-text-black no-underline dark:hover:text-gray-500 font-semibold hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 text-black dark:text-white">Contact</a>
        </li>
        {/* <li>
        <Switcher />
        </li> */}
        {/* <li>
        <button type="button" class="text-white dark:hover:bg-gray-500 hover:text-gray-600  bg-[#050708] hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-white dark:hover:bg-white mr-2 mb-2 dark:bg-white dark:text-black">
                     Contact Me
                <img src={handgif} class="w-6 h-6 ml-1 -mr-1 items-center">
                    </img>
                    </button>
        </li> */}
								{/* <!-- <li class="email"><span id="email-tooltip" tooltip="Click to copy my email address to your clipboard 😀"><a id="email" data-clipboard-text="email address goes here">email</a></span></li> --> */}
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://github.com/jayavardhanjv" title="Follow me on Github" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="logo-github" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.linkedin.com/in/jayavrdhan-jv/" title="Connect with me on Linkedin" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white" ><ion-icon name="logo-linkedin" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="mailto:jjayavardhan81.gmail.com" title="Mail me" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="mail-outline" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.instagram.com/nanu_jv/" title="Follow me on Instagram" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="logo-instagram" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								{/* <!-- <li class="dribbble"><a href="https://www.dribbble.com/adhamdannaway" title="See my Dribbble shots" target="_blank">dribbble</a></li> --> */}
        </ul>
        </div>
        </div>
            </div>
            </div>
        </nav>
        </header>
    // <header class="supports-backdrop-blur:bg-background/60 sticky backdrop-blur-[5px] top-0 z-40 w-full    dark:bg-background/60 shadow-sm dark:shadow-neutral-800">
    // <div class="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
    //   <a class=" dark:text-foreground mr-4 sm:mr-6  items-center space-x-2 overflow-visible z-40" href="/">
    //   <svg width="142" height="37" viewBox="0 0 142 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path fill-rule="evenodd" clip-rule="evenodd" d="" fill="currentColor">
    //     </path>
    //     </svg>
    //     </a>
    //     <div class="flex flex-1 items-center justify-end space-x-2 md:justify-end">
    //     <nav class="flex items-center space-x-3 sm:space-x-6  text-sm font-medium">
    //     <a class="hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg hover:dark:text-foreground no-underline text-black dark:text-foreground/60" href="#about">About</a>
    //     <a class="hidden sm:flex transition-colors dark:hover:bg-foreground/10 hover:bg-background/10 px-3 py-2 hover:rounded-lg hover:dark:text-foreground no-underline text-black dark:text-foreground/60" href="#project">Projects</a>
    //     <a href="https://github.com/jayavardhanjv" title="Follow me on Github" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="logo-github" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a>
    //     <li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.linkedin.com/in/jayavrdhan-jv/" title="Connect with me on Linkedin" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white" ><ion-icon name="logo-linkedin" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a>
    //     <li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="mailto:jjayavardhan81.gmail.com" title="Mail me" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="mail-outline" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
    //     <li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.instagram.com/nanu_jv/" title="Follow me on Instagram" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="logo-instagram" class="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
    //     <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0" type="button" id="radix-:r6:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
    //     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[1.2rem] w-[1.2rem] dark:text-foreground rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100 duration-300">
    //     <path d="" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
    //     </path>
    //     </svg>
    //     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-0 duration-300">
    //     <path d="1 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.6999310.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
    //       </path>
    //       </svg>
    //       <span class="sr-only">Toggle theme</span>
    //       </button>
    //       <a class="group group  inline-block items-center justify-center rounded-md text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-accent text-foreground shadow dark:hover:bg-accent/90  px-3 py-2 " href="#contact">Contact <span class="wave">👋🏻</span>
    //       </a>
    //       </nav>
    //       </div>
    //       </div>
    //       </header>
    );
}

export default Navbarr;