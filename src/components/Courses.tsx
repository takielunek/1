"use client";

import Course from "./Course";

const Courses = () => {

    const slideData = [
      {
        id: 1,
        img: "/yoga.jpg",
        title: "Yoga course",
        price: 1250,
      },
      {
        id: 2,
        img: "/swimming.jpg",
        title: "Swimming course",
        price: 2500,
      },
      {
        id: 3,
        img: "/hiking.jpg",
        title: "Hiking course",
        price: 800,
      },
      {
        id: 4,
        img: "/archery.jpg",
        title: "Archery course",
        price: 1250,
      },
      {
        id: 5,
        img: "/diver.jpg",
        title: "Diving course",
        price: 2500,
      },
      {
        id: 6,
        img: "/swimmers.jpg",
        title: "Sync swimming course",
        price: 800,
      },
      {
        id: 7,
        img: "/horse.jpg",
        title: "Horse riding course",
        price: 1250,
      },
      {
        id: 8,
        img: "/training.jpg",
        title: "Personal trainer course",
        price: 2500,
      },
      {
        id: 9,
        img: "/ski.jpg",
        title: "Skiing course",
        price: 800,
      },
    ];

  return (
    <div className="bg-purple">
      <div className="wrapper px-[10px]">
        <p className="text-[35px] ss:text-[40px] sm:text-[60px] font-bold text-center py-4">
          Popular courses
        </p>
        <div className="pt-[20px] pb-[40px]">
          {slideData.map((item) => (
            <div key={item.id} className="p-4">
              <Course img={item.img} title={item.title} price={item.price} />
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-[20px] pb-[40px]">
          <button className="text-center text-[25px] border-4 border-white rounded-xl px-[20px] py-[10px] hover:bg-white duration-300">
            Check out our other courses!
          </button>
        </div>
      </div>
    </div>
  );

}

export default Courses;
