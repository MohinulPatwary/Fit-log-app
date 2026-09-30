import Image from 'next/image';
import Link from 'next/link';

function GymCard({ data }) {
  // console.log(data)
  return (
    
      
      <div className="w-full max-w-md mx-auto border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900 text-white shadow-sm">
      <Link href={`/fit-locks/${data.id}`}>
      <div className="relative aspect-16/10 w-full bg-zinc-800">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
          sizes="(max-w-768px) 100vw, 450px" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {data.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="bg-[#C2F800] text-black text-xs font-bold uppercase px-2.5 py-1 rounded">
              {muscle}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-1 tracking-tight">{data.name}</h3>
        <p className="text-sm text-zinc-400 mb-4">{data.equipment}</p>
        <hr className="border-zinc-800 mb-4" />
        <div className="flex items-center justify-between text-sm text-zinc-400 font-semibold">
          <div className="flex items-center gap-1.5">
            <span>⏱️</span>
            <span>{data.duration} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>🔥</span>
            <span>{data.caloriesBurned} Kcal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>⭐</span>
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
      
  );
}

export default GymCard;