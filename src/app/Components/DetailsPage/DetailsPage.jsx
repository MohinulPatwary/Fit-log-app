import Image from 'next/image';
import React from 'react';
import MyPlanBtn from '../SharedData/MyPlanBtn';
import SaveCardBtn from '../SharedData/SaveCardBtn';

const DetailsPage = ({ CardDetails }) => {
    const {
        name,
        caloriesBurned,
        description,
        difficulty,
        duration,
        equipment,
        image,
        instructions = [],
        muscleGroups = [],
        rating,
        reps,
        sets
    } = CardDetails;

    return (
        <div className="w-full min-h-screen text-[#c9d1d9] p-4 md:p-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="w-full h-full flex">
                        <div className="w-full relative min-h-100 md:min-h-150 border border-[#1f2937] rounded-xl overflow-hidden bg-[#161b22]">
                            <Image
                                src={image}
                                alt="gym img"
                                fill
                                className="object-cover w-full h-full" 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div> 
                    <div className="w-full space-y-6">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
                                {name}
                            </h1>
                            <p className="text-[#8b949e] text-sm md:text-base leading-relaxed mb-4">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {muscleGroups.map((muscle, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#C2F800] text-black text-xs font-black uppercase px-2.5 py-1 rounded shadow-sm"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="w-full bg-[#161b22] border border-[#1f2937] rounded-xl px-4 text-[14px]">
                            <div className="flex justify-between items-center py-4 border-b border-[#1f2937]">
                                <span className="text-[#8b949e] font-bold tracking-wider uppercase text-[11px]">Equipment</span>
                                <span className="text-white font-medium">{equipment}</span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-[#1f2937]">
                                <span className="text-[#8b949e] font-bold tracking-wider uppercase text-[11px]">Difficulty</span>
                                <span className="text-white font-medium">{difficulty}</span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-[#1f2937]">
                                <span className="text-[#8b949e] font-bold tracking-wider uppercase text-[11px]">Sets</span>
                                <span className="text-white font-medium">{sets}</span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-[#1f2937]">
                                <span className="text-[#8b949e] font-bold tracking-wider uppercase text-[11px]">Reps</span>
                                <span className="text-white font-medium">{reps}</span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-[#1f2937]">
                                <span className="text-[#8b949e] font-bold tracking-wider uppercase text-[11px]">Duration</span>
                                <span className="text-white font-medium">{duration}</span>
                            </div>

                            <div className="flex justify-between items-center py-4 border-b border-[#1f2937]">
                                <span className="text-[#8b949e] font-bold tracking-wider uppercase text-[11px]">Calories</span>
                                <span className="text-white font-medium">{caloriesBurned}</span>
                            </div>

                            <div className="flex justify-between items-center py-4">
                                <span className="text-[#8b949e] font-bold tracking-wider uppercase text-[11px]">Rating</span>
                                <span className="text-white font-medium">{rating}</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <h2 className="text-lg font-bold tracking-wider text-white uppercase mb-3 border-b border-[#1f2937] pb-2">
                                Instructions
                            </h2>

                            <div className="space-y-3">
                                {instructions.map((instruction, ind) => (
                                    <div key={ind} className="flex gap-3 items-start py-1">
                                        <span className="font-bold text-[#C2F800] min-w-5 text-sm pt-0.5">
                                            {ind + 1}.
                                        </span>
                                        <p className="font-normal text-[#c9d1d9] text-sm md:text-base leading-relaxed">
                                            {instruction}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div className='flex items-center gap-4'>
                             <MyPlanBtn CardDetails={CardDetails}></MyPlanBtn>
                          <SaveCardBtn CardDetails={CardDetails}></SaveCardBtn>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
