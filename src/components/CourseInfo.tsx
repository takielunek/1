import { FaStar } from "react-icons/fa";

interface propsType {
  text: string;
}

const CourseInfo: React.FC<propsType> = ({ text }) => {
  return (
    <div className="flex">
      <div className="w-[25px] h-[25px]">
        <FaStar className="mt-[5px]"/>
      </div>
      <p className="ml-[10px] text-[12px] ss:text-[16px] sm:text-[18px] md:text-[20px]">
        {text}
      </p>
    </div>
  );
};

export default CourseInfo;
