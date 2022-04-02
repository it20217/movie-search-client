import React from 'react';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Header from "./components/Header/Header"
import styles from "./App.module.scss"
import Search from "./components/Search/Search"
import Footer from "./components/Footer/Footer"
import Home from './views/Home'

function App() {
  return (
    <div className={styles["container-wrapper"]}>
      <Header/>
       <div className={styles.container}>
       <Router>
        <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="search" element={<Search />} />
        </Routes>
      </Router>   
      </div>
      <Footer />
    </div>
  );
}

export default App;
