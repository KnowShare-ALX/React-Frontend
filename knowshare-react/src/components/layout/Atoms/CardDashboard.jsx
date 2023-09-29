const CardDashboard = ({ onClick, icon, label, text }) => {
  return (
    <div
      onClick={onClick}
      className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[10rem] p-6 bg-[#ccfee5] rounded-lg flex flex-col justify-between hover:shadow-md transition duration-500 ease-in-out delay-50 hover:scale-105 hover:translate-y-1 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {icon}
        <h1 className="font-bold">{label}</h1>
      </div>
      <h1 className="flex-end">{text}</h1>
    </div>
  );
};

export default CardDashboard;
