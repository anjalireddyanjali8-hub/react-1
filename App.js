// import logo from './logo.svg';
// import './App.css';
// import Landing from './Landing/Landing';

// function App() {
//   return (
//     <div className="App">
//       <Landing/>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';
// import Landing from './Landing/Landing';
// import Navbar from './Landing/Navbar/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Landing/>
//       <Navbar/>
//       <home/>
//       <about/>
//       <contact/>
//     </div>
//   );
// }
// export default App
// import logo from './logo.svg';

// import './App.css';
// import Landing from './Landing/Landing';
// import Navbar from './Landing/Navbar/Navbar';
// import Home from './Home/Home';
// import About from './About/About';
// import Contact from './Contact/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Landing />
//       <Home />
//       <About />
//       <Contact/>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import Landing from './Landing/Landing';
// import Navbar from './Landing/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Landing/>
//       <Navbar/>
      
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Landing from './Landing/Landing';
// import Navbar from './Landing/Navbar';
// function App() {
//   let student={
//     name:"anjali",
//     age:21,
//     course:"MCA"
//   }
//   return (
//     <>
//     <Landing name={student.name} age={student.age} course={student.course}/>
//     </>
      
//   );
// }

// export default App;
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

import logo from "./assets/logo.png";
import banner from "./assets/banner.jpg";
import aboutImg from "./assets/about.jpg";
import contactImg from "./assets/contact.jpg";

function App() {
  const menuItems = ["Home", "About", "Contact", "Login", "Signup"];

  return (
    <>
      <Navbar logo={logo} menus={menuItems} />

      <Home
        heading="Welcome to Our Company"
        description="We build modern web solutions for businesses."
        banner={banner}
      />

      <About
        title="About Our Company"
        description="We are a technology-driven startup focused on web development."
        image={aboutImg}
      />

      <Contact
        email="info@company.com"
        phone="+91 98765 43210"
        address="Bangalore, India"
        image={contactImg}
      />

      <Login />
      <Signup />
      <Footer company="Company Name" />
    </>
  );
}

export default App;
