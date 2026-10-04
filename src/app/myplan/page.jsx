"use client";

import React, { useContext, useState } from "react";
import { GymContext } from "../context/GymContext";
import EmptyData from "./EmptyData";
import MyPlanCard from "./MyPlanCard";
import SaveCardList from "./SaveCardList";
import MyPlanData from "./MyplanDisplay/MyPlanData";
import SaveData from "./MyplanDisplay/SaveData";

export default function MyPlanPage() {
  const [selectedTab, setSelectedTab] = useState("plan");
  const { gymPlan, savelist } = useContext(GymContext);
  const [sortBy, setSortBy] = useState("duration");

  const sortPlan = (items) => {
    const sortedPlan = [...items];

    if (sortBy === "duration") {
      sortedPlan.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedPlan.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlan;
  };

  const sortedMyPlan = sortPlan(gymPlan);
  const sortedSaveList = sortPlan(savelist);

  // console.log(sortedMyPlan, "sortedMyPlan");
  // console.log(sortedSaveList, "sortedSaveList");

  const isPlanSelected = selectedTab === "plan";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-3">
        <h1 className="text-3xl font-bold text-white sm:text-3xl">
          MY PLAN
        </h1>
        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="mb-6">

        {isPlanSelected
          ? <MyPlanData gymPlan={sortedMyPlan} />
          : <SaveData savelist={sortedSaveList} />}

      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="my-6 flex">
          <div className="inline-flex rounded-lg bg-zinc-800 p-1 border border-zinc-700">
            <button
              type="button"
              onClick={() => setSelectedTab("plan")}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${isPlanSelected
                ? "bg-zinc-100 text-zinc-900 shadow-sm"
                : "text-zinc-400 hover:text-white"
                }`}
            >
              My Plan
            </button>

            <button
              type="button"
              onClick={() => setSelectedTab("saved")}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${!isPlanSelected
                ? "bg-zinc-100 text-zinc-900 shadow-sm"
                : "text-zinc-400 hover:text-white"
                }`}
            >
              Saved
            </button>
          </div>

        </div>
        <div>
          <select className="select select-ghost text-sm text-zinc-400 sm:text-base"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}>
            <option disabled={true}>Sort By</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="w-full bg-transparent p-3 sm:p-5">
        <div className="space-y-4">
          <div className="mt-1 text-sm text-zinc-400 sm:text-base">
            {isPlanSelected ? (
              sortedMyPlan.length === 0 ? (
                <EmptyData />
              ) : (
                sortedMyPlan.map((planCard) => (
                  <MyPlanCard
                    key={planCard.id}
                    planCard={planCard}
                  />
                ))
              )
            ) : (
              (
                sortedSaveList.length === 0 ? (
                  <EmptyData />
                ) : (
                  sortedSaveList.map((planCard) => (
                    <SaveCardList
                      key={planCard.id}
                      planCard={planCard}
                    />
                  ))
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}