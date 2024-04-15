"use client";

import CourseInfo from "./CourseInfo";

const CoursesInfo = () => {
  const coursesInfo = [
    {
      id: 1,
      text: "Our courses are crafted by experts with years of experience in their respective fields. Learners can trust they're receiving high-quality, insightful content.",
    },
    {
      id: 2,
      text: "Each course emphasizes practical, real-world application. Students not only learn theory but also gain actionable skills they can immediately implement in their careers or personal lives.",
    },
    {
      id: 3,
      text: "Your courses are designed to engage learners through interactive elements such as quizzes, discussions, and hands-on exercises. This fosters deeper understanding and retention of the material.",
    },
    {
      id: 4,
      text: "Upon completion of your courses, students receive certification that carries weight in their respective industries. This recognition can open doors to new career opportunities and professional advancement.",
    },
    {
      id: 5,
      text: "Beyond professional development, your courses also promote personal growth and enrichment. Students gain confidence, expand their horizons, and discover new passions and interests.",
    },
  ];

  return (
    <div className="py-[30px]">
      <div className="bg-lavender">
        <div className="wrapper px-[10px] py-[20px] grid gap-[10px]">
          <p className="text-[35px] ss:text-[40px] sm:text-[60px] font-bold text-center py-4">
            About us
          </p>
          {coursesInfo.map((item, index) => (
            <CourseInfo key={index} text={item.text} />
          ))}
          <div className="flex justify-center pt-[20px] pb-[40px]">
            <a href="/courses">
              <button className="text-center text-[15px] ss:text-[20px] sm:text-[25px] border-4 border-white rounded-xl px-[40px] py-[10px] bg-purple hover:bg-lavender duration-300">
                Join now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesInfo;
