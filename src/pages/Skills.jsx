import React from "react";
import firebaselogo from "../addons/logos/skilllogo/firebase.png";
import java from "../addons/logos/skilllogo/java.png";
import python from "../addons/logos/skilllogo/python.png";
import htmllogo from "../addons/logos/skilllogo/html.png";
import tailwindlogo from "../addons/logos/skilllogo/tailwind.png";
import flutter from "../addons/logos/skilllogo/flutter.png";
import "../styles/skills.css";

const Portfolio = () => {
    return(
      <section id="about" class=" py-10 md:py-20  relative space-y-16 p-2  justify-center items-center flex flex-col  " >
<div class="content d-flex align-items-center justify-content-center ">
        <div class="container rounded ml-96">
        <div>

        </div>
        
            
            
            <div class="rollers position-relative overflow-hidden">
            <div class="relative  overflow-hidden from-white to-black dark:from-[hsl(0,0%,100%)] dark:to-[hsl(0,0%,0%)]">
                <section id="about" class=" py-10 md:py-20  relative space-y-16 p-6  justify-center items-center flex flex-col  " >
                <p class="w-full  text-center text-black items-center  mt-4 justify-center  text-4xl font-extrabold tracking-tigh dark:text-black dark:   text-transparent bg-clip-text">Skill <span class="text-blue-600">Set</span></p>
                <span class="text-gray-600 tracking-wide items-center font-semibold justify-center text-center text-lg display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance">
                Within my arsenal of skills and expertise lies a diverse array of programming languages<br />, tools, and latest technologies that I have learnt and continually seeking new challenges<br /> and opportunities to expand my skill set in ever-evolving technology landscape.
                </span>
                
                    <p/>
                </section>
                            </div>
              
                <div class="start-roller">
                  
                </div>
                <div class="wrapper">
                    <div class="items-container roll-LL">
                        <div class="item">
                            <img src="" alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={firebaselogo} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={java} alt="" class="company scale-75"/>
                        </div>
                        <div class="item">
                            <img src={python} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQ0cTetyZjIM6rdaE9XAJorqw-dbR55cUlMAy8Dhlr4tHJ_s&s" alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={tailwindlogo} alt="" class="company"/>
                        </div>
                    </div>
                    <div class="items-container roll-RL">
                        <div class="item">
                            <img src={firebaselogo} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={flutter} alt="" class="company scale-75"/>
                        </div>
                        <div class="item">
                            <img src={java} alt="" class="company scale-75"/>
                        </div>
                        <div class="item">
                            <img src={python} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQ0cTetyZjIM6rdaE9XAJorqw-dbR55cUlMAy8Dhlr4tHJ_s&s" alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={tailwindlogo} alt="" class="company"/>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="items-container reverse-roll-LL">
                        <div class="item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQ0cTetyZjIM6rdaE9XAJorqw-dbR55cUlMAy8Dhlr4tHJ_s&s" alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={java} alt="" class="company scale-75"/>
                        </div>
                        <div class="item">
                            <img src={python} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={flutter} alt="" class="company scale-75"/>
                        </div>
                        <div class="item">
                            <img src="https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png" alt="" class="company scale-50"/>
                        </div>
                    </div>
                    <div class="items-container reverse-roll-RL">
                        <div class="item">
                            <img src={firebaselogo} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png" alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={python} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src={java} alt="" class="company"/>
                        </div>
                        <div class="item">
                            <img src="https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png" alt="" class="company"/>
                        </div>
                    </div>
                </div>
                <div class="end-roller"></div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Portfolio;