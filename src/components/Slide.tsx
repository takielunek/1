import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  price: number;
}

const Slide: React.FC<propsType> = ({ img, title, price }) => {
  return (
    <div className="wrapper pb-[10px] grid place-items-center px-[10px]">
      <div className="relative border-8 border-purple rounded-xl">
        <Image src={img} width={1000} height={400} alt="background" className="z-0" />
        <div className="absolute z-10 bottom-[20px] left-[20px] ss:left-[40px]">
          <p className="text-[20px] ss:text-[30px] sm:text-[40px] font-bold">
            {title}
          </p>
          <p className="text-[15px] sm:text-[20px]">starting at ${price}</p>
          <button className="border-4 border-purple bg-purple hover:bg-white rounded-xl px-[10px] py-[1px] mx-[2px] duration-300 text-[15px] sm:text-[20px] m-2 sm:m-4 hidden ss:block">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
