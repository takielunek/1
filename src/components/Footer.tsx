import Image from "next/image";
import Logo from "@/src/assets/Logo/Logo.png";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {
 
  const currentYear = new Date().getFullYear();

  const icon = "bg-purple p-[4px] rounded-full mx-[6px]";
   const circle =
     "border-4 border-purple bg-purple hover:bg-white rounded-full p-[4px] mx-[2px] duration-300";

  return (
    <div>
      <div className="wrapper py-[40px] ">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center">
          <div className="flex justify-between pb-[10px] sm:pb-0">
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

      <div className="bg-purple py-[20px]">
        <p className="text-center text-[15px]">
          {" "}
          &copy; {currentYear} Karolina Anna Jesionek
        </p>
      </div>
    </div>
  );
};

export default Footer;

