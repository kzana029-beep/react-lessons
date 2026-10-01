import React from "react";
import ProfileCard from "./components/ProfileCard";
import CourseCard from "./components/CourseCard";
import Counter from "./components/Counter";
import Post from "./components/Post";
import StudentCard from "./components/StudentCard";

const technologies = ["react", "html", "js"];
const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
];
function App() {
  return (
    <>
      <div>
        <ProfileCard name={"Ardit"} age={"21"} city={"vushtrri"} />
        <ProfileCard name={"Zana"} age={"19"} city={"vushtrri"} />
        <ProfileCard name={"Xhenis"} age={"22"} city={"novosell"} />
      </div>
      <section>
        <div>
          <CourseCard
            title={"React JS"}
            instructor={"egzon"}
            duration={"3 months"}
            price={"$100"}
          />
          <CourseCard
            title={" JS"}
            instructor={"drenusha"}
            duration={"2 months"}
            price={"$130"}
          />
          <CourseCard
            title={"Css"}
            instructor={"korab"}
            duration={"6 months"}
            price={"$160"}
          />
        </div>
      </section>
      <Counter />
      <Post />
      <div>
        <StudentCard name={"ardit"} course={"react"} />
        <StudentCard name={"zana"} course={"html"} />
        <StudentCard name={"hana"} course={"scss"} />
      </div>
    </>
  );
}

export default App;
