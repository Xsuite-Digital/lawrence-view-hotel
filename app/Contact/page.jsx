import Map from "../Components/Map/page";

function page() {
  return (
    <div className="bg-black text-white p-4 mt-32">
      <div className="text-center">
        <h1>Contact</h1>
        <span className="block">
          Explore our range of comfortable rooms, each thoughtfully designed for
          relaxation and convenience. From cozy single rooms to spacious suites,
          all accommodations feature modern amenities, plush bedding, and
          beautiful views. Select the perfect room to suit your style and
          budget, ensuring a memorable stay. Book now to enjoy luxury and
          comfort at exceptional rates.
        </span>
      </div>
      <Map />
      <div className="flex py-12 space-x-6 px-4 ">
        <div className="w-[40vw]">
          <h2 className="uppercase">How to contact</h2>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </span>
        </div>
        <div className="w-[60vw] flex justify-center ">
          <form className="rounded-md w-full  space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Write your message..."
              className="w-full p-2 rounded-md border border-[#C4A053]  text-black placeholder-gray-400 focus:outline-none  h-32 resize-none"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#C4A053] text-black font-bold py-2 px-4 rounded-md  focus:outline-none w-[1/6]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
