import { useEffect } from "react";

const Bookingengine = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = import.meta.env.VITE_BOOKING_ENGINE_URL;
    script.async = true;
    script.id = "hr_widget_script";
    document.getElementById("hr_search_widget")?.appendChild(script);

    return () => {
      document.getElementById("hr_widget_script")?.remove();
    };
  }, []);

  return (
    <div className="flex items-center bg-black justify-center">
      <div>
      <style>
  {`
    @import url(//d2uyahi4tkntqv.cloudfront.net/assets/shared.booknow.css?v=1.0.0);
    @import url(//d2uyahi4tkntqv.cloudfront.net/assets/search_widget.css?v=1.0.0);

    #hr_search_widget .booking-tab,
    #hr_search_widget .date-picker,
    #hr_search_widget .room-selector {
      padding: 15px !important;
      background-color: #fff !important; 
    }

    #hr_search_widget .room-selector {
      background-color: #fff !important; 
      color: #000 !important;
      border: 1px solid #ccc !important;
    }

    #hr_search_widget button {
      background-color: #b89628 !important; 
      color: #fff !important;          
      padding: 12px !important; 
      box-sizing: border-box;               
      border: none;                    
      cursor: pointer;                 
    }

    #hr_search_widget button:hover {
      background-color: #333 !important;
    }
  `}
</style>

      </div>
      <div id="hr_search_widget"></div>
    </div>
  );
};

export default Bookingengine;
