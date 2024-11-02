function page() {
  return (
    <div className="bg-black">
      <div className="flex justify-center p-4">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.095101821856!2d74.3261954744265!3d31.54900454572886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ba19c196e3%3A0x54ae9e130d37d85a!2sLawrence%20View%20Hotel%2C%20Lahore!5e0!3m2!1sen!2s!4v1730447313760!5m2!1sen!2s"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className=" h-[60vh] rounded-xl"
        />
      </div>
    </div>
  );
}

export default page;
