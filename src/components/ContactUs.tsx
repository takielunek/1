import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import Cities from "./Cities";

const ContactUs = () => {
  const cities = [
    {
      id: 1,
      text: "Orlando",
    },
    {
      id: 2,
      text: "Atlanta",
    },
    {
      id: 3,
      text: "Waszyngton",
    },
    {
      id: 4,
      text: "Filadelfia",
    },
    {
      id: 5,
      text: "Boston",
    },
    {
      id: 6,
      text: "Louisville",
    },
    {
      id: 7,
      text: "Memphis",
    },
    {
      id: 8,
      text: "Oklahoma City",
    },
    {
      id: 9,
      text: "Nashville",
    },
  ];

  const title =
    "text-[35px] ss:text-[40px] sm:text-[60px] font-bold text-center py-4";
  const infoStyle =
    " flex justify-center text-[15px] ss:text-[20px] sm:text-[25px] py-[10px]";
  const icon = "mr-[10px] mt-[8px]";

  return (
    <div>
      <div className="py-[60px]">
        <div className="bg-lavender">
          <div className="wrapper px-[10px] pb-[40px]">
            <p className={`${title}`}>Find us in these cities:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 gap-y-[10px] gap-x-[10px] ">
              {cities.map((item, index) => (
                <Cities key={index} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple">
        <div className="wrapper px-[10px]">
          <p className={`${title}`}>Feel free to contact us</p>
          <div className="pb-[40px]">
            <div className={`${infoStyle}`}>
              <FaPhone className={`${icon}`} />
              <a href="tel:123123123">123 123 123</a>
            </div>
            <div className={`${infoStyle}`}>
              <MdAlternateEmail className={`${icon}`} />

              <a href="mailto:fauget@contact.com">fauget@contact.com</a>
            </div>
            <div className={`${infoStyle}`}>
              <FaFacebookMessenger className={`${icon}`} />
              <a href="https://www.messenger.com/fauget/">
                https://www.messenger.com/fauget/
              </a>
            </div>
            <div className={`${infoStyle}`}>
              <FaFacebook className={`${icon}`} />
              <a href="https://www.facebook.com/fauget/">
                https://www.facebook.com/fauget/
              </a>
            </div>
            <div className={`${infoStyle}`}>
              <FaInstagram className={`${icon}`} />
              <a href="https://www.instagram.com/fauget/">
                https://www.instagram.com/fauget/
              </a>
            </div>
            <div className={`${infoStyle}`}>
              <FaSnapchat className={`${icon}`} />
              <a href="https://www.snapchat.com/fauget/">
                https://www.snapchat.com/fauget/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
