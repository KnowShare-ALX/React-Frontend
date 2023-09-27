import { ImSpinner2 } from "react-icons/im";

const ButtonSolid = ({ label, type, onClick, loading, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "items-center justify-center gap-2 transition ease-in-out duration-300 hover:scale-110 hover:translate-y-1 ml-3 my-3 flex text-white px-4 active:bg-[#0f7173] hover:bg-[#348d8e] bg-[#0f7173] ring-1 ring-[#0f7173] shadow-sm shadow-slate-600 rounded " +
        className
      }
    >
      {loading && <ImSpinner2 className="animate-spin my-auto" />}
      {label}
    </button>
  );
};

export default ButtonSolid;
