import Navbarr from "../addons/Navbarr";
import React from "react";
// import { Typewriter } from "react-simple-typewriter/dist/components/Typewriter";
import {} from 'react-simple-typewriter'
function MainPage() {
    // const{text} = Typewriter({
    //     worrds:['Coding with the precision of Sherlock and the creativity of Picasso.', 'I am Jayavardhan J'],
    //     loop:{},
    // });
    return(
        
        <div>
            <script src="https://unpkg.com/typewriter-effect@2.3.1/dist/core.js"></script>
        <Navbarr/>
        <div>
            <section class="relative w-full  min-h-[90vh] py-28 flex flex-col text-center items-center justify-center  sm:px-14 overflow-x-hidden isolate max-w-[calc(1234px + 56px * 2)] gap-4 md:gap-6 px-4 pt-8 md:pt-12 pb-8">
            <h1 class="items-center text-6xl font-display font-semibold">
            Coding with the precision of Sherlock and the creativity of Picasso.
            </h1>
            </section>
        </div>
        </div>

    );
}

export default MainPage;