const ButtonSolid = ({ label }) => {
  return (
    <button className="transition ease-in-out duration-500 delay-150 hover:scale-110 hover:translate-y-1 ml-3 my-3 block text-white px-4 active:bg-[#0f7173] hover:bg-[#348d8e] bg-[#0f7173] ring-1 ring-[#0f7173] shadow-sm shadow-slate-600 rounded">
      {label}
    </button>
  );
};

export default ButtonSolid;
