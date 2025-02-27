import P2 from "../assets/p2.webp";
import before from "../assets/before.webp";
import shape from "../assets/shape.webp";
import logor from "../assets/logor.webp";
const Contact = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Contact Section */}
      <div className="relative w-full mb-4">
        {/* Background Image */}
        <img
          src={P2}
          alt="Luxury Hotel Room"
          className="w-full h-auto md:w-[1000px] md:h-[500px]"
        />

        {/* Inquiry Box */}
        <div className="absolute lg:top-3/4 top-10 md:left-1/4 xl:left-[20rem] lg:ml-0 ml-5 md:transform md:-translate-x-1/2  md:-translate-y-1/2 bg-black bg-opacity-80 text-white p-3 w-[90%] max-w-sm md:max-w-md">
          <div className="border border-[#c4a053] p-6 border-opacity-70 text-center">
            <img
              src={logor}
              alt="LVH-logo"
              className="mx-auto w-16 h-16 md:w-24 md:h-24"
            />
            <p className="text-sm mt-2">Call us for any inquiry</p>
            <p className="text-xl md:text-2xl font-bold">(801) 500 50 088</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative mt-8 md:absolute md:top-[81.4%] xl:left-[50rem]  lg:ml-0 ml-5 -top-16 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white  shadow-lg p-6 md:p-8 w-[90%] max-w-lg">
          <h2 className="text-lg md:text-xl flex items-center justify-center font-semibold text-black mb-4">
            <img
              src={before}
              alt="icon"
              height={25}
              width={25}
              className="lg:w-6  2xl:w-4 2xl:h-4 w-full h-auto lg:h-6 "
            />
            <span className="mx-2">Get in Touch</span>
            <img
              src={before}
              alt="icon"
              height={25}
              width={25}
              className="lg:w-6 lg:h-6 2xl:w-4 2xl:h-4 w-full h-auto "
            />
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="date"
                placeholder="Check In"
                className="border p-2 rounded w-full"
              />
              <input
                type="date"
                placeholder="Check Out"
                className="border p-2 rounded w-full"
              />
            </div>
            <textarea
              placeholder="Write a Message"
              className="border p-2 rounded w-full mb-4"
            ></textarea>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-[#c4a053] transition">
              CHECK AVAILABILITY
            </button>
          </form>
        </div>

        {/* Decorative Shape Image */}
        <div className="lg:block   absolute hidden right-0   top-1/2 2xl:top-1   ">
          <img
            src={shape}
            height={400}
            width={400}
            alt="shape-image"
            className="w-full h-full xl:h-[20rem] xl:w-[20rem]  2xl:h-[42rem] 2xl:w-[42rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
