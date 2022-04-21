import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import styles from "./App.module.scss"
import Search from "./components/Search/Search"
import Footer from "./components/Footer/Footer"
import Movie from './components/Movie/Movie';
import Home from './views/Home'
import ReadMore from './components/ReadMore/ReadMore'
import ContactUs from './components/ContactUs/ContactUs'
import Page404 from './components/Error/Page404'


function App() {
  
  const [showNavbar, setShowNavbar] = useState(false);

  //Show navbar state switch function to switch on/off Navbar component
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);  
  }

  return ( 
    <div className={styles["container-wrapper"]}>
      <Router>
        <Header setShowNavbar= {() => {handleNavbar()} }/>
        < Navbar showNavbar={showNavbar}/>
        <div className={styles.container}>
          <Routes>
          <Route path="*" element={<Page404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="search" element={<Search />} />
          <Route exact path="search/:searchQuery" element={<Search />} />
          <Route exact path="movie/:movieId" element={<Movie />} />
          <Route exact path="read-more" element={<ReadMore />} />
          <Route exact path="contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
