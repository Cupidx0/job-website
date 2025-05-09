import React from "react";
import { Link } from "react-router-dom";
function Four(){
    return(
        <div className="flex flex-col items-center justify-center gap-10 bg-black-100">
                <h2 className="text-red-500">
                    Page not found  
                </h2>
                <button className="max-w-[180px] h-[43px] bg-green-500 m-4 text-white rounded-md transition-transform hover:scale-105 hover:bg-blue-500">
                    <Link to = "/home" className="w-full h-full block font-bold text-center">Go back home</Link>
                </button>
            </div>
    )
}
export default Four;