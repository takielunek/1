import Image from 'next/image'
import VerticalLogo from "@/src/assets/Logo/VerticalLogo.png";

const Main = () => {
  return (
    <div className="background">
      <div className="wrapper ">
        <div className=" px-[10px] pt-[20px] pb-[30px] ss:py-[40px] sm:py-[80px]">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center ">
            <div className="w-4/5 sm:w-1/2 grid place-items-center">
              <div className="flex-column text-white">
                <p className="text-[35px] ss:text-[40px] sm:text-[60px] font-bold">
                  Fuel your ambition
                </p>
                <p className="text-xl">
                  Whether you are a seasoned professional looking to expand your
                  skillset or a beginner eager to dive into a new field, our
                  diverse range of courses caters to all levels of experience
                  and ambition.
                </p>
              </div>
            </div>
            <div className="hidden sm:block">
              <Image
                src={VerticalLogo}
                height={400}
                alt="Logo"
                className="py-[16px] grid place-items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main