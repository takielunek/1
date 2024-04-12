import Courses from "../components/Courses";
import Discount from "../components/Discount";
import Main from "../components/Main";
import Slick from "../components/Slick";

export default function Home() {
  return (
    <main>
      <Main />
      <Discount />
      <Slick />
      <Courses />
    </main>
  );
}
