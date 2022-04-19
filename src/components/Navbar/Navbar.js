import { Link } from 'react-router-dom'
import styles from "./Navbar.module.scss"
import logo from "../../assets/images/dev-logo.png"
import { HiOutlineChat } from "react-icons/hi";

function Navbar(isShown) {

  console.log(isShown);

  return(
    <div className={styles.Navbar}>
      <div className="flex bg-gray-200">
        {/* <!-- container --> */}

        <aside
          className="flex flex-col items-center bg-white text-gray-700 shadow ">
          {/* <!-- Side Nav Bar--> */}

          <ul>
            {/* <!-- Items Section --> */}
            <li className="hover:bg-gray-100">
              <div className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500">
                <Link to="/">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
              </div>
            </li>
            <li className="hover:bg-gray-100">
              <div className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500">
                <Link to="/contact-us">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </Link>
              </div> 
            </li>

            <li className="hover:bg-gray-100">
              <a
                href="."
                className="h-16 px-6 flex flex justify-center items-center w-full
                focus:text-orange-500">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>

              </a>
            </li>


            <li className="hover:bg-gray-100">
              <a
                href="/"
                className="h-16 px-6 flex flex justify-center items-center w-full
                focus:text-orange-500">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
                    2-1.61L23 6H6"></path>
                </svg>

              </a>
            </li>

            <li className="hover:bg-gray-100">
              <a
                href="/contact-us"
                className="h-16 px-6 flex flex justify-center items-center w-full
                focus:text-orange-500">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
                    0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
                    0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
                    2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
                    0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
                    0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
                    0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
                    0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
                    1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
                    1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
                    0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
                    1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
                    2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
                    0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
                    1.65 0 0 0-1.51 1z"></path>
                </svg>
              </a>
            </li>

            <li className="hover:bg-gray-100">
              <a
                href="."
                className="h-16 px-6 flex flex justify-center items-center w-full
                focus:text-orange-500">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path
                    d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </a>
            </li>

          </ul>

          <div className="mt-auto h-16 flex items-center w-full">
            {/* <!-- Action Section -> */}
            <button
              className="h-16 w-10 mx-auto flex flex justify-center items-center
              w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">
              <svg
                className="h-5 w-5 text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>

            </button>
          </div>

        </aside>
      </div>
    </div>
  )
}

export default Navbar;