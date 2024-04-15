import { MdLocationPin } from "react-icons/md";

interface propsType {
  text: string;
}

const Cities: React.FC<propsType> = ({ text }) => {
  return (
    <div className="flex">
      <MdLocationPin size={`25px`} className="mt-0 sm:mt-[5px]"/>
      <p className="text-[15px] ss:text-[20px] sm:text-[25px] ml-[10px]">
        {text}
      </p>
    </div>
  );
};

export default Cities;
