import Image from "next/image";


const Footer = () => {
    return (
    <footer className="w-full bg-black border-t border-t-zinc-800 px-6 py-8 shadow-sm">
    <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center sm:gap-0">
        <div className="flex items-center gap-3">
            <Image 
                src="/assets/logo.png" 
                alt="Logo" 
                width={30} 
                height={30} 
                className="object-contain" 
            />
            <span className="text-xl font-bold text-white tracking-wide">FITLOG</span>
        </div>
        <div className="text-center text-sm text-zinc-400 sm:text-right">
            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    </div>
</footer>




    );
};

export default Footer;