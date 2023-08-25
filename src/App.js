// import logo from './logo.svg';
// import './App.css';
// import Navbarr from "./addons/Navbarr";
import Navbarr from "./addons/Navbarr";
import Footer from "./addons/footer";
import MainPage from "./pages/Intro";
import About from "./pages/about";
import Edu from "./pages/Skills";
import Sskill from "./pages/Edu";
import Contact from "./pages/contact"
import Project from "./pages/projects"
// import NewNav from "./addons/Newnav"
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
