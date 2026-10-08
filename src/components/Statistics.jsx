import React from "react";
import StatCard from "./StatCard";

function Statistics() {
  return (
    <div className="statistics">
      <StatCard title="Total Students" value="4" stat="Active" color="blue" />
      <StatCard title="Present Students" stat="Live" value="20" color="green" />
      <StatCard title="Total Teachers" stat={15} value="5" color="orange" />
    </div>
  );
}

export default Statistics;
