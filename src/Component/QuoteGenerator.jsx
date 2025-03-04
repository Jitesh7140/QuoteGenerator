import { useState,useEffect } from "react";
import React from "react";
import "./QuoteGenerator.css";
import refreshIcon from "./icon.svg";
import refreshIcon2 from "./github.png";

function QuoteGenerator() {
  const [quote, setQuote] = useState({
    quote: "The most technologically efficient machine that man has ever invented is the book.",
    author: "Northrop Frye",
  });

  useEffect(() => {
    fetchQuote();
  }, [])
  

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://api.quotable.io/random/");
      
      
      if (!response.ok) {  
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setQuote({ quote: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const githubIcon = () => {
    window.open("https://github.com/Jitesh7140", "_blank");
  };
  

  return (
    <>
      <div className="rounded-2xl border-4 flex justify-center flex-col items-center bg-blue-400">
        <p className="Quotes flex justify-center flex-col items-center font-bold text-white">
          {quote.quote}
        </p>

        <div className="bg-white hr1 border-t-2"></div>

        <div className="w-full  my-3 pr-5 pl-5 flex justify-between items-center">
          <p className="Author text-white font-bold">{quote.author}</p>
           
            <div className="flex justify-center items-center gap-3.5">
            <img src={refreshIcon} onClick={()=>{fetchQuote()}} alt="Refresh" className="btnFetch cursor-pointer " />
            <img src={refreshIcon2}  onClick={()=>{githubIcon()}}   alt="Refresh" className="btnFetch2 cursor-pointer " />

            </div>

     
           
        </div>
      </div>
    </>
  );
}

export default QuoteGenerator;
