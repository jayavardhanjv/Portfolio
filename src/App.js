// import logo from './logo.svg';
// import './App.css';
// import Navbarr from "./addons/Navbarr";
import Navbarr from "./addons/Navbarr";
import Footer from "./addons/footer";
import MainPage from "./pages/Intro";
import About from "./pages/about";
import Edu from "./pages/Skills";
import Sskill from "./pages/sskil";
import Contact from "./pages/contact"
import Project from "./pages/projects"
function App() {
  return (
    <div>
      <Navbarr/>
      <div>
      <MainPage/>
      <About />
      <Edu />
      <Sskill />
      <Project />
      <Contact />
      <Footer />
    </div>
    </div>
    
    
    

  );
}

export default App;
