import ButtonSolid from "../Atoms/ButtonSolid";
import Card from "../Atoms/Card";
import { FaCode } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { TbWorldWww } from "react-icons/tb";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center p-4">
      <div className="flex lg:self-start  flex-col items-center justify-center lg:items-start max-w-[30rem] py-4 gap-8 lg:gap-12">
        <h1 className="font-bold lg:px-2 text-2xl">Categories</h1>
        <span className="lg:px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid
          error id explicabo facere unde culpa, sit in ad voluptatem nobis neque
          provident esse sunt tempore perferendis eveniet illo. Quia.
        </span>
        <ButtonSolid
          onClick={() => {
            navigate("/blog/home");
          }}
          label="Learn More"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[40rem]">
        <Card
          image={<FaCode className="w-8 h-8" />}
          label="Software Engineering"
        />
        <Card
          image={<GiPadlock className="w-8 h-8" />}
          label="Cyber Security"
        />
        <Card
          image={<TbWorldWww className="w-8 h-8" />}
          label="Web Development"
        />
        <Card
          image={<HiSpeakerphone className="w-8 h-8" />}
          label="Digital Marketing"
        />
        <Card
          image={<AiFillEdit className="w-8 h-8" />}
          label="Content Creation"
        />
        <Card
          image={<MdManageAccounts className="w-8 h-8" />}
          label="Account Management"
        />
      </div>
    </div>
  );
};

export default Category;
