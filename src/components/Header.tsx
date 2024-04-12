import Image from "next/image";
import Logo from "@/src/assets/Logo/Logo.png"
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Header = () => {
  const icon = "bg-purple p-[4px] rounded-full mx-[6px]";

  return (
    <div className="border-b-2 border-gray-200 ">
      <div className="wrapper py-4 ">
        <div className="flex flex-col ss:flex-row justify-center ss:justify-around items-center">
          <Image src={Logo} width={200} alt="Logo" className="py-4" />
          <div className="grid gap-[12px] py-4">
            <div className="flex">
              <div className={`${icon}`}>
                <CiPhone size={"15px"} />
              </div>
              <a href="tel:+48 123 123 123">
                <p className="hover:underline">+48 123 123 123</p>
              </a>
            </div>
            <div className="flex">
              <div className={`${icon}`}>
                <CiMail size={"15px"} />
              </div>
              <a href="mailto:sports@team.com">
                <p className="hover:underline">sports@team.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
