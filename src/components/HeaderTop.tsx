import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const HeaderTop = () => {
  const circle =
    "border-4 border-purple bg-purple hover:bg-white rounded-full p-[4px] mx-[2px] duration-300";
  const border =
    "border-4 border-purple bg-purple hover:bg-white rounded-xl px-[10px] py-[2px] mx-[2px] duration-300";

  return (
    <div className="border-b-2 border-gray-200 px-[10px] bg-lavender">
      <div className="py-4 wrapper">
        <div className="flex justify-between items-center">
          <div className="flex justify-between">
            <div className={`${circle}`}>
              <CiFacebook size={"20px"} />
            </div>
            <div className={`${circle}`}>
              <CiInstagram size={"20px"} />
            </div>
            <div className={`${circle}`}>
              <CiTwitter size={"20px"} />
            </div>
          </div>
          <div className="hidden ss:block">
            <p className="text-lg">
              JOIN OUR <span className="font-bold">TEAM!</span>
            </p>
          </div>
          <div className="flex justify-between">
            <div className={`${border}`}>
              <button>Log in</button>
            </div>
            <div className={`${border}`}>
              <button>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
