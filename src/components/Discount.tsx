import Image from "next/image";
import discount from "@/src/assets/other/discount.png";

const Discount = () => {
  return (
    <div className="bg-purple px-[10px] py-[20px] ss:py-[40px] sm:py-[80px] ">
      <div className="wrapper">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center">
          <div className="w-4/5 sm:w-1/2 grid place-items-center">
            <Image src={discount} width={500} alt="Discount 30%" />
          </div>
          <div className="w-4/5 sm:w-1/2 grid place-items-center">
            <div>
              <p className="text-[35px] ss:text-[40px] sm:text-[60px] font-bold leading-[35px] ss:leading-[45px] sm:leading-[65px]">
                New season. Same career ambition.
              </p>
              <p className="text-xl mt-[10px]">
                Lean into your fresh start — with up to 30% off select courses.
                Use code <span className="font-bold">FAU30</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
