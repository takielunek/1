import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const link =
    "text-xl border-4 border-white bg-purple hover:bg-white rounded-xl px-[20px] py-[2px]  duration-300";
 

  return (
    <div className="bg-purple">
      <div className="wrapper">
        <button className="block sm:hidden p-4">
          <RxHamburgerMenu className="text-[30px]" />
        </button>
        <div className="hidden sm:block">
          <div className=" flex justify-center">
            <div className="flex w-4/5 md:w-3/4 justify-between p-2 ">
              <Link className={`${link}`} href="/" replace>
                HOME
              </Link>
              <Link className={`${link}`} href="/courses" replace>
                COURSES
              </Link>
              <Link className={`${link}`} href="/gallery" replace>
                GALLERY
              </Link>
              <Link className={`${link}`} href="/contact" replace>
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
