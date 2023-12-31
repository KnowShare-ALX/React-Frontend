import { useNavigate } from "react-router-dom";
import ButtonSolid from "./ButtonSolid";

const CardBg = ({ label, content, image }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 max-w-[20rem] rounded-lg shadow overflow-hidden">
      <div className="max-h-[10rem] overflow-hidden">
        <img className="" src={image} alt="" />
      </div>
      <div className="font-bold px-4">{label}</div>
      <div className="px-4">{content}</div>
      <div>
        <ButtonSolid
          onClick={() => {
            navigate("/login");
          }}
          label="Enroll Now"
        />
      </div>
    </div>
  );
};

export default CardBg;
