import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header"
import styles from "./App.module.scss"
import Search from "./components/Search/Search"
import Footer from "./components/Footer/Footer"
import Movie from './components/Movie/Movie';
import Home from './views/Home'
import ReadMore from './components/ReadMore/ReadMore'
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  return (
    <div className={styles["container-wrapper"]}>
      <Router>
        <Header/>
        <div className={styles.container}>
          <Routes>
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
