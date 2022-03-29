import React from 'react';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Header from "./components/Header/Header"
import styles from "./App.module.scss"
import Search from "./components/Search/Search"

function App() {
  return (
    <div className={styles["container-wrapper"]}>
      <Header/>
       <div className={styles.container}>
       <Router>
        <Routes>
         <Route exact path="/" element={<h1>Home Page</h1>} />
         <Route exact path="search" element={<Search />} />
        </Routes>
      </Router>   
      </div>
    </div>
  );
}

export default App;
