import Image from 'next/image';
import Link from 'next/link';
import MyPlanLength from './NavLength/MyPlanLength';
import SaveListLength from './NavLength/SaveListLength';




const NavBar = () => {
    const links = <>
        <li><Link href="/">Workouts</Link></li>
        <li><Link href="/myplan">My Plan</Link></li>
    </>

    return (
        <div className="navbar bg-black border-b border-b-zinc-800 px-6 py-4 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white px-2">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-zinc-900 border border-zinc-800 rounded-box z-[1] mt-3 w-52 p-2 text-zinc-300 shadow-lg">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src="/assets/logo.png" alt="Logo" width={30} height={30} className="object-contain" />
                        <span className="font-bold text-white text-xl tracking-wide">FITLOG</span>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal text-zinc-300 px-1 gap-2">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <MyPlanLength></MyPlanLength>
                    <SaveListLength></SaveListLength>
                </div>

            </div>
        </div>

    );
};

export default NavBar;