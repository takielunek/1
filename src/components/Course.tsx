import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface propsType {
  img: string;
  title: string;
  price: number;
}

const Course: React.FC<propsType> = ({ img, title, price }) => {
  return (
    <div className="w-3/4 sm:w-1/2 relative">
      <Image
        src={img}
        width={1000}
        height={400}
        alt="courses"
        className="rounded-t-xl border-8 border-white"
      />
      <div className="bg-white rounded-b-xl pb-[20px]">
        <p className="text-center font-bold text-[30px]">{title}</p>
        <p className="text-center text-[20px]">starting at ${price}</p>
      </div>
      <button className="absolute flex bottom-[10px] right-[20px] text-darkPurple hover:text-hoverPurple duration-300">
        <p className="text-[20px] mr-[5px]">More</p>
        <FaArrowRight className="mt-[8px]" />
      </button>
    </div>
  );
};

export default Course;
