"use client";

import CoursePage from "./CoursePage";

const CoursesPage = () => {
  
  const productsData = [
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
          Our all courses
        </p>
        <div className="pt-[20px] pb-[40px] px-[10px] grid grid-cols-1 place-items-center sm:grid-cols-2 gap-[20px]">
          {productsData.map((item, index) => (
            <CoursePage
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default CoursesPage;
