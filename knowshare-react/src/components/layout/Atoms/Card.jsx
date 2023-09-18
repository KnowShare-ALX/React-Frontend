const Card = ({ label, image }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[18rem] rounded shadow p-2">
      <img src={image} alt="cardImage" />
      <h1 className="font-bold">{label}</h1>
    </div>
  );
};

export default Card;
