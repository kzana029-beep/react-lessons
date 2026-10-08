import React from "react";
import ProfileCard from "./components/ProfileCard";
import CourseCard from "./components/CourseCard";
import Counter from "./components/Counter";
import Post from "./components/Post";
import StudentCard from "./components/StudentCard";
import Product from "./components/Product";
import ShoppingList from "./components/ShoppingList";

const technologies = ["react", "html", "js"];
const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
];
function App() {
  return (
    <>
      <hr />
      <div>
        <ProfileCard name={"Ardit"} age={"21"} city={"vushtrri"} />
        <ProfileCard name={"Zana"} age={"19"} city={"vushtrri"} />
        <ProfileCard name={"Xhenis"} age={"22"} city={"novosell"} />
      </div>
      <hr />
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
      <hr />
      <Counter />
      <hr />
      <Post />
      <hr />
      <div>
        <StudentCard name={"ardit"} course={"react"} />
        <StudentCard name={"zana"} course={"html"} />
        <StudentCard name={"hana"} course={"scss"} />
      </div>
      <hr />
      <div>
        <Product name={"Iphone 14"} price={1000} />
        <Product name={"laptop"} price={500} />
        <Product name={"mouse"} price={50} />
      </div>
      <hr />
      <ShoppingList />
    </>
  );
}

export default App;
