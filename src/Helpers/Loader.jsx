import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.webp";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className={`transition-opacity duration-1000  absolute inset-0 flex items-center justify-center`}>
      
      </div>
      
      <div className={`transition-opacity duration-500 `}>
        <div className="relative w-64 h-64">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 border-4 border-[#c4a053] rounded-full opacity-20"></div>
          </div>
          
          {/* Main spinning loader */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-48 h-48 border-2 border-[#c4a053] rounded-full animate-spin"
              style={{ 
                animationDuration: '3s',
                clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'
              }}
            ></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-48 h-48 border-4 border-t-[#c4a053] border-r-transparent border-b-transparent border-l-[#c4a053] rounded-full animate-spin"
              style={{ animationDuration: '2s' }}
            ></div>
          </div>
          
          {/* Inner spinning element */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-36 h-36 border-4 border-t-white border-r-transparent border-b-white border-l-transparent rounded-full animate-spin"
              style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
            ></div>
          </div>
          
          {/* Center hotel branding */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="bg-[#c4a053] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-serif text-4xl font-bold">LVH</span>
            </div> */}
             <img
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          src={logo}
                          alt="Lawrence View Hotel Logo"
                          width={200}
                          height={300}
                          className="lg:w-32 lg:h-32 w-24 h-24"
                        />
          </div>
          
          {/* Pulsing effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#c4a053] rounded-full animate-ping opacity-20" 
              style={{ animationDuration: '3s' }}></div>
          </div>
        </div>
        
        {/* Hotel name */}
        <div className="text-center mt-8">
          <h1 className="text-[#c4a053] font-serif text-2xl tracking-wider font-light">LAWRENCE VIEW</h1>
          <h2 className="text-white font-serif text-lg tracking-widest mt-1">HOTEL</h2>
          
          {/* Progress bar */}
          <div className="mt-6 w-64 h-0.5 bg-white bg-opacity-20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#c4a053] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Loading text */}
          <p className="text-white text-sm mt-2 tracking-widest">
            {progress }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;