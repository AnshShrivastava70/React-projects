import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Back = () => {

    const navigate = useNavigate()
  return (
    <div onClick={() => {navigate(-1)}} className="pl-2 pt-3 ">
      <ArrowLeft className="text-gray-500 cursor-pointer size-5 md:size-7"/>
    </div>
  );
};
export default Back;
