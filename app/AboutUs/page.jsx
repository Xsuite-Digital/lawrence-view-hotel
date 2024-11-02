import { AboutContent } from "../Helpers/Data";

const page = () => {
  return (
    <div className="bg-black text-white p-14 mt-32">
      <div className=" flex  items-center flex-col">
        <h1 className="">About</h1>
        <h2 className=" mt-4">Luxury Accommodation in Lahore</h2>
      </div>
      <div>
        {AboutContent.map((content, index) => (
          <div key={index} className="w-full  pt-12">
            <span className="text-2xl">{content.span}</span>
            <p className="w-[90%] pt-4">{content.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
