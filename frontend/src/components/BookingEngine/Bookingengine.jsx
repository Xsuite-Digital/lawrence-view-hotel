

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
    <div className="w-[90vw] z-10">
      <style>
        {`@import url(//d2uyahi4tkntqv.cloudfront.net/assets/shared.booknow.css?v=1.0.0);
          @import url(//d2uyahi4tkntqv.cloudfront.net/assets/search_widget.css?v=1.0.0);`}
      </style>
      <div id="hr_search_widget"></div>
    </div>
  );
};

export default Bookingengine;
