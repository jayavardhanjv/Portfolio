import erovra from "../assets/ero.JPG";
import rain from "../assets/rain.JPG";
function Projects() {
    return(
        <div class=" bg-gray-50 continer">
            <section id="projects" class=" py-10 md:py-20  relative space-y-16 p-6  justify-center items-center flex flex-col  " >
                    <div class="text-center items-center mb-5">
                    
                    <h2 class="text-black font-bold mb-2">Pro<span class="text-blue-600">ject</span></h2>
                    </div>
                    <div class="row gx-5 justify-content-center ">
                        <div class="col-lg-11 col-xl-9 col-xxl-8 ">
                            {/* <!-- Project Card new--> */}
                            <div class="card overflow-hidden shadow rounded-4  mb-5 transition duration-300 ease-in-out hover:scale-105">
        <a href="https://github.com/jayavardhanjv/ReUnit" class="no-underline text-black">
            <div class="card-body p-4 md:p-0">
                <div class="md:flex md:items-center">
                    <div class="md:w-1/2 p-4">
                        <h2 class="font-semibold text-xl md:text-2xl mb-2">ReUnite - Lost and Found Mobile <span class="text-blue-600">App</span></h2>
                        <p class="mb-4">ReUnite is a Mobile Application that helps user to report the lost and
found item helps to reunite the lost item with original owner. I was
responsible for developing the back-end business logic and designing
the front-end user interface of the Mobile Application. I learned how
to use Dart to create Responsive backed, Flutter and other decency to
create responsive and modern Mobile Application, and Firebase as
database.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 rounded bg-[#2bdecf38] text-black dark:text-white">Flutter</span>
                            <span class="px-2 py-1 rounded bg-[#efff105f] dark:text-black">Dart</span>
                            <span class="px-2 py-1 rounded bg-[#4577ce25] text-[#4577ce]">Firebase</span>
                            {/* <span class="px-2 py-1 rounded bg-[#d1772425] text-[#d17724]">Firebase</span> */}
                            {/* <span class="px-2 py-1 rounded bg-[#2dd12425] text-[#38d124]">Bootstrap</span> */}
                            {/* <span class="px-2 py-1 rounded bg-[#ce24d125] text-[#c824d1]">Data Visualization</span> */}
                        </div>
                    </div>
                    <img class="w-full h-auto object-cover md:w-1/2 md:object-contain transition duration-300 ease-in-out hover:scale-115" src={erovra} alt="Rainfall Prediction"/>
                </div>
            </div>
        </a>
    </div>
                            {/* <!-- Project Card 1--> */}
                            <div class="card overflow-hidden shadow rounded-4  mb-5 transition duration-300 ease-in-out hover:scale-105">
        <a href="https://erovra1.firebaseapp.com/" class="no-underline text-black">
            <div class="card-body p-4 md:p-0">
                <div class="md:flex md:items-center">
                    <div class="md:w-1/2 p-4">
                        <h2 class="font-semibold text-xl md:text-2xl mb-2">Erovra: Competitive Exam <span class="text-blue-600">Preparator</span></h2>
                        <p class="mb-4">EROVRA is a web application that can be utilized in multiple ways to help any student in their path of preparing for upcoming competitive and entrance exams. In this application, any student can practice for the exam in a competitive and game-based structure. Here the student can act as a teacher by providing their questions and making other people answer those questions, which helps everyone from the student to the student and for the students.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 rounded bg-[#2bdecf38] text-black dark:text-white">ReactJS</span>
                            <span class="px-2 py-1 rounded bg-[#efff105f] dark:text-black">Nodejs</span>
                            <span class="px-2 py-1 rounded bg-[#4577ce25] text-[#4577ce]">Tailwind CSS</span>
                            <span class="px-2 py-1 rounded bg-[#d1772425] text-[#d17724]">Firebase</span>
                            <span class="px-2 py-1 rounded bg-[#2dd12425] text-[#38d124]">Bootstrap</span>
                            {/* <span class="px-2 py-1 rounded bg-[#ce24d125] text-[#c824d1]">Data Visualization</span> */}
                        </div>
                    </div>
                    <img class="w-full h-auto object-cover md:w-1/2 md:object-contain transition duration-300 ease-in-out hover:scale-115" src={erovra} alt="Rainfall Prediction"/>
                </div>
            </div>
        </a>
    </div>
                            {/* <!-- Project Card 2--> */}
                            <div class="card overflow-hidden  shadow rounded-4 mb-5 transition duration-300 ease-in-out hover:scale-105">
        <a href="https://github.com/jayavardhanjv/Rainfall_Predeiction_of_India" class="no-underline text-black">
            <div class="card-body p-4 md:p-0">
                <div class="md:flex md:items-center">
                    <div class="md:w-1/2 p-4">
                        <h2 class="font-semibold text-xl md:text-2xl mb-2">Rainfall Prediction Using<span class="text-blue-600"> ML</span></h2>
                        <p class="mb-4">Implemented linear regression algorithms to predict rainfall patterns and visualize them using visualization tools for better understanding. Utilized Jupyter Notebook for data analysis and MS Excel for data preprocessing. Achieved good accuracy in rainfall predictions, contributing to better resource planning for agriculture.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 rounded bg-[#2bdecf38] text-black dark:text-white">Python</span>
                            <span class="px-2 py-1 rounded bg-[#efff105f] dark:text-black">Machine Learning</span>
                            <span class="px-2 py-1 rounded bg-[#4577ce25] text-[#4577ce]">Data Analytics</span>
                            <span class="px-2 py-1 rounded bg-[#d1772425] text-[#d17724]">Jupyter Notebook</span>
                            <span class="px-2 py-1 rounded bg-[#2dd12425] text-[#38d124]">Ms Excel</span>
                            <span class="px-2 py-1 rounded bg-[#ce24d125] text-[#c824d1]">Data Visualization</span>
                        </div>
                    </div>
                    <img class="w-full h-auto object-cover md:w-1/2 md:object-contain transition duration-300 ease-in-out hover:scale-115" src={rain} alt="Rainfall Prediction"/>
                </div>
            </div>
        </a>
    </div>
                            {/* <!-- Project Card 3--> */}
                            <div class="card overflow-hidden shadow rounded-4 mb-5  transition duration-300 ease-in-out hover:scale-105">
                            <a href="https://github.com/jayavardhanjv/Spotify.clone" class="no-underline text-black">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5">
                                            <h2 class="fw-bolder">Spotify Clone Using stack and <span class="text-blue-600">queue</span></h2>
                                            <p>Built a Spotify clone using HTML, CSS, and JavaScript, showcasing proficiency in front-end
development.Implemented queue data structure for efficient playlist management, resulting in increase in
user satisfaction.</p>
<div class="flex flex-wrap gap-4 mt-2">
                                                <span class="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded  bg-[#2bdecf38] text-black dark:text-[#ffffff] ">HTML</span>
                                                <span class="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#efff105f] dark:text-[#000000]">CSS</span>
                                                <span class="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#4577ce25] text-[#4577ce]">SQL</span>
                                                <span class="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#d1772425] text-[#d17724]">PHP</span>
                                                {/* <br /> */}
                                                <span class="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#2dd12425] text-[#38d124]">Bootstrap</span>
                                                {/* <span class="px-[0.5rem] py-[0.25rem] leading-4 text-sm rounded bg-[#ce24d125] text-[#c824d1]">Charts &amp; Analytics</span> */}
                                                </div>
                                        </div>
                                        {/* <img class="img-fluid rounded object-contain h-58 w-96 transition duration-300 ease-in-out hover:scale-115" src={rain} alt="..."/> */}
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    </section>
                </div>
    );
}
export default Projects;