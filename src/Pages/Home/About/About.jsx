import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 relative">
          <img src={img1} className=" w-full rounded-lg shadow-2xl" />
          <img
            src={img2}
            className="absolute -right-10 top-2/3 w-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 pr-12">
          <h5 className="text-[#FF3811] font-bold">About Us</h5>
          <div className="">
            <h2 className="text-5xl font-bold py-5 mb-5">
              We are qualified & of experience in this field
            </h2>
            <p className="mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="mb-5">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811] border-[#FF3811] hover:bg-[#FFF] hover:text-[#FF3811] hover:border-[#FF3811] mt-10">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
