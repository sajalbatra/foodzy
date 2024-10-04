import aboutimg from "../assets/aboutimg.svg";
import Testimonals from "./Testimonals";
const About = () => {
  return (
    <>
    <div className="flex flex-wrap gap-10 m-10 ">
      <img src={aboutimg} alt="aboutimg" className=" lg-device:max-w-[50%] " />
      <div className="mobile:w-[100%] mobile:text-justify mobile:mx-0 lg-device:max-w-[40%]">
        <h1 className="mb-4 text-3xl font-playfair">We provide healthy food for your family.</h1>
        <h3 className="mb-4 text-lg font-dmsans">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h3>
        <p className="text-base">At Foodzy, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
      </div>
    </div>
    <Testimonals/>
    </>
  );
};

export default About;
