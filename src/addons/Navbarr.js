import { useState, useEffect } from "react";
import llogo from "../addons/logos/bblogo.png"
import dlogo from "../addons/logos/wlogo.png"
import handgif from "../addons/logos/hand.gif"
import Switcher from "../addons/Switcher"
function Navbarr() {
    return(
        <nav class="bg-white border-white-100 dark:border-white-100 dark:border-white-100    supports-backdrop-blur:bg-background/60 sticky backdrop-blur-[5px] z-20     dark:bg-black shadow-sm dark:shadow-neutral-200">
            <div class="max-w-screen-xl flex-wrap justify-between mx-auto  container flex h-14 items-center px-1 sm:px-3 lg:px-4">
                <a href="/" class="flex items-center ">
                    <img v-show="$colorMode.value === 'light'" src={llogo} class=" h-16 max-w-full" alt="JV.dev logo" />
                    <img v-show="$colorMode.value === 'dark'" src={dlogo} class="h-16 max-w-full" alt="JV.dev logo" />
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
          <a href="#about" class="font-semibold hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white">About</a>
        </li>
        <li>
          <a href="#" class="font-semibold hidden sm:flex transition-colors dark:hover:bg-foreground/10  hover:bg-background/10 px-3 py-2 hover:rounded-lg  hover:dark:text-foreground dark:text-foreground/60 dark:text-white">Projects</a>
        </li>
        <li>
        <Switcher />
        </li>
        <li>
        <button type="button" class="text-white  bg-[#050708] hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-white dark:hover:bg-white mr-2 mb-2 dark:bg-white dark:text-black">
                     Contact Me
                <img src={handgif} class="w-6 h-6 ml-1 -mr-1 items-center">
                    </img>
                    </button>
        </li>
        </ul>
        </div>
        </div>
            </div>

        </nav>
    );
}

export default Navbarr;