import ButtonSolid from "../Atoms/ButtonSolid";

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

      <div className="rounded p-2 flex gap-2 flex-col justify-center items-center max-w-[20rem] md:min-h-[6rem] md:max-w-[24rem] bg-white shadow-md text-center">
        <h1 className="font-semibold">
          Watch captivating videos by industry leaders. Stay updated with the
          latest tech trends and innovations.
        </h1>
        <ButtonSolid label="Explore Now" />
      </div>
    </div>
  );
};

export default Hero;
