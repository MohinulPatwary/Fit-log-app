import React from 'react';

const MyPlanData = ({ gymPlan }) => {

  const durationSum = gymPlan.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.duration;
  }, 0);

  const caloriesSum = gymPlan.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.caloriesBurned
      ;
  }, 0);


  return (

    <div className="w-full">
      <div className="mx-auto w-full  rounded-2xl border border-zinc-800 bg-[#0b0e14] p-5 sm:p-7">

        <div className="grid grid-cols-3 divide-x divide-zinc-800">


          <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
              Exercises
            </span>

            <span className="text-3xl font-extrabold leading-none text-[#ccff00] sm:text-5xl">
              {gymPlan.length}
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
              Minutes
            </span>

            <span className="text-3xl font-extrabold leading-none text-white sm:text-5xl">
              {durationSum}
            </span>
          </div>

          {/* Calories */}
          <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
              Calories
            </span>

            <span className="text-3xl font-extrabold leading-none text-white sm:text-5xl">
              {caloriesSum}
            </span>
          </div>

        </div>
      </div>
    </div>

  );
};

export default MyPlanData;