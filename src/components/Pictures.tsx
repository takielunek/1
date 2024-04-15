"use client";

import PhotoGallery from "./PhotoGallery";

const Pictures = () => {
  const galleryData = [

    {
      id: 2,
      img: "/2.jpg",
    },
    {
      id: 3,
      img: "/3.jpg",
    },
    {
      id: 4,
      img: "/4.jpg",
    },
    {
      id: 5,
      img: "/5.jpg",
    },
    {
      id: 6,
      img: "/6.jpg",
    },
 
    {
      id: 8,
      img: "/8.jpg",
    },
    {
      id: 9,
      img: "/9.jpg",
    },

    {
      id: 12,
      img: "/12.jpg",
    },
    {
      id: 13,
      img: "/13.jpg",
    },

  ];

const button =
  "text-center text-[15px] ss:text-[20px] sm:text-[25px] border-4 border-white rounded-xl px-[40px] py-[10px] bg-lavender hover:bg-purple duration-300";

  return (
    <div className="pt-[60px]">
      <div className="bg-lavender py-[30px]">
        <div className="wrapper px-[10px] ">
          <p className="text-[35px] ss:text-[40px] sm:text-[60px] font-bold text-center py-4">
            Our gallery
          </p>
          <div className="pt-[20px] pb-[40px] px-[10px] grid grid-cols-1 place-items-center sm:grid-cols-2 gap-y-[40px] gap-x-[20px]">
            {galleryData.map((item, index) => (
              <PhotoGallery key={index} img={item.img} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-purple">
        <div className="wrapper">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center py-[40px]">
            <a href="" className="py-[10px] sm:py-0">
              <button className={`${button}`}>Join now</button>
            </a>
            <a href="/courses" className="py-[10px] sm:py-0">
              <button className={`${button}`}>Our courses</button>
            </a>
            <a href="/contact" className="py-[10px] sm:py-0">
              <button className={`${button}`}>Contact us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
