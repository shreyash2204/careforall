import React from "react";
import StatsCard from "../components/StatsCard";
import { stats } from "../data";

const Stats = () => {
  

  return (
    <div className="pt-12 px-4 w-full flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold leading-tight tracking-wider">
          This is the impact
          <span className="gloria-font text-[#f47445]"> YOU </span>
          helped us achieve in 2022-23
        </h2>
      </div>
      <div className="stats-grid flex w-[70vw] max-lg:w-full flex-wrap justify-center items-center gap-x-8 gap-y-20 py-12">
        {stats.map((stat) => {
          console.log(stat);
          return <StatsCard stat={stat} />;
        })}
      </div>
    </div>
  );
};

export default Stats;
