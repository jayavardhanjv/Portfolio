import { useState, useEffect } from "react";
import llogo from "../addons/logos/bblogo.png"
import dlogo from "../addons/logos/wlogo.png"
import handgif from "../addons/logos/hand.gif"
import Switcher from "../addons/Switcher"
function Navbarr() {
    return(
        <header class="supports-backdrop-blur:bg-background/60 sticky backdrop-blur-[5px] top-0 z-40 w-full    dark:bg-background/60 shadow-sm dark:shadow-neutral-800">
        <nav class="bg-white border-white-100 dark:border-white-100 dark:border-white-100    supports-backdrop-blur:bg-background/60 sticky backdrop-blur-[5px] z-20     dark:bg-black shadow-sm dark:shadow-neutral-200">
            <div class="max-w-screen-xl flex-wrap justify-between mx-auto  container flex h-14 items-center px-1 sm:px-3 lg:px-4 hover:text-gray-500 dark:hover:text-gray-500">
                <a href="/" class="flex items-center hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500" title="Jv.dev logo">
                    <img v-show="$colorMode.value === 'light'" src={llogo} class=" h-16 max-w-full hover:text-gray-500 dark:hover:text-gray-500" alt="JV.dev logo" />
                    <img v-show="$colorMode.value === 'dark'" src={dlogo} class="h-16 max-w-full hover:text-gray-500 dark:hover:text-gray-500" alt="JV.dev logo" />
                </a>
                <div class="flex md:order-2 items-center">
                <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-black dark:text-black dark:hover:bg-text-black dark:focus:ring-black" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto items-center" id="navbar-solid-bg">
      <ul class="flex flex-col font-semibold mt-4 rounded-lg items-center bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-text-white">
        <li>
          <a href="/#about" class="font-semibold border-text-black dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white">About</a>
        </li>
        <li>
          <a href="/#project" class="hover:text-gray-500 border-text-black dark:hover:text-gray-500 font-semibold hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white">Projects</a>
        </li>
        <li>
          <a href="/#contact" class="hover:text-gray-500 border-text-black dark:hover:text-gray-500 font-semibold hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white">Contact</a>
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
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.twitter.com/AdhamDannaway" title="Follow me on Twitter" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="logo-github" class="text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.linkedin.com/in/jayavrdhan-jv/" title="Connect with me on Linkedin" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white" ><ion-icon name="logo-linkedin" class="text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.facebook.com/ilikeadham" title="Like me on Facebook" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="logo-facebook" class="text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								<li class="hover:scale-150 scale-150 hover:text-gray-500 dark:hover:text-gray-500"><a href="https://www.instagram.com/adham.dannaway" title="Follow me on Instagram" target="_blank" class="font-semibold dark:hover:text-gray-500 hover:text-gray-600 hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white"><ion-icon name="logo-instagram" class="text-white hover:text-gray-500 dark:hover:text-gray-500"></ion-icon></a></li>
								{/* <!-- <li class="dribbble"><a href="https://www.dribbble.com/adhamdannaway" title="See my Dribbble shots" target="_blank">dribbble</a></li> --> */}
        </ul>
        </div>
        </div>
            </div>

        </nav>
        </header>
    );
}

export default Navbarr;