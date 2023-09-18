const Card = ({ label, image }) => {
  return (
    <div className="flex flex-col items-start gap-2 justify-center max-w-[18rem] rounded-lg shadow hover:shadow-lg text-sm p-4">
      <span className="self-start px-4 bg-neutral-300 p-2 rounded-lg">
        {typeof image === "string" ? <img src={image} alt="" /> : image}
      </span>

      <h1 className="text-sm md:text-base font-bold mt-4">{label}</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est illum
        accusantium maiores quasi laudantium.
      </span>
    </div>
  );
};

export default Card;
