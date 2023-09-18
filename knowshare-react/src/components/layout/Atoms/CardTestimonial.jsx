const CardTestimonial = ({ image, label }) => {
  return (
    <div className="flex flex-col items-start gap-2 justify-start max-w-[18rem] rounded-lg shadow hover:shadow-lg text-sm p-4">
      <span className="self-start px-4  p-2 ">
        {typeof image === "string" ? (
          <img
            className="max-h-[6rem] max-w-[6rem] rounded-full overflow-hidden "
            src={image}
            alt=""
          />
        ) : (
          image
        )}
      </span>

      <h1 className="text-sm md:text-base font-bold mt-4">{label}</h1>
      <span className="text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est illum
        accusantium maiores quasi laudantium.
      </span>
    </div>
  );
};

export default CardTestimonial;
