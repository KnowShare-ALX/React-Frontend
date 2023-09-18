import ButtonSolid from "../Atoms/ButtonSolid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Hero = () => {
  return (
    <div className="hero-image relative flex flex-col md:flex-row justify-around p-4 items-center">
      <div className="rounded p-2 flex gap-2 flex-col justify-center items-center max-w-[20rem] md:min-h-[6rem] md:max-w-[24rem] bg-white shadow-md text-center">
        <h1 className="font-semibold">
          Join a thriving community of tech enthusiasts, experts, and learners.
          Discover a world of knowledge, videos, and solutions.{" "}
        </h1>
        <ButtonSolid label="Get Started" />
      </div>

      <div className="max-w-[40rem]">
        <img src="assets/images/header.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
