import React from "react";
import "./App.css";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import Statistics from "./components/Statistics";
import StudentList from "./components/StudentList";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Statistics />
        <StudentCard />
      </div>
    </>
  );
}

export default App;
