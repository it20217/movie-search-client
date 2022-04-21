import React from "react";
import { useNavigate } from "react-router-dom"

export default function Page404() {

  // useNavigate hook let to navigate programmatically 
  const navigate = useNavigate();


    return (
        <div>
            <div className="text-gray-800 grid place-content-center text-center py-12 md:py-40 px-16 md:px-24">
                <h1 className="font-bold text-7xl py-2">404</h1>
                <p className="md:hidden py-2">
                    Sorry. The content you’re looking for <br /> doesn’t exist. Either it was removed, <br /> or you mistyped the link.
                </p>
                <p className="hidden md:block py-2">
                    Sorry. The content you’re looking for doesn’t exist.
                    <br />
                    Either it was removed, or you mistyped the link.
                </p>
                <div>
                    <div className="mt-16 md:flex md:justify-center md:gap-4 py-2">
                        <button 
                          className="w-1/2 md:w-auto my-2 md:my-0 border rounded-md py-4 px-8 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                          onClick={()=>{navigate('/contact-us')}}
                        >
                            Contact us
                        </button>
                        <button 
                          className="w-1/2 md:w-auto my-2 md:my-0 border rounded-md bg-gray-800 text-white py-4 px-8 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
                          onClick={()=>{navigate('/')}}
                        >
                          Go to Homepage
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
