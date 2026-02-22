import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -100',
                end: 99999,
                toggleClass: {
                    className: 'nav-scrolled',
                    targets: navRef.current
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[3rem] px-8 py-4 flex items-center justify-between gap-12 text-primary border border-transparent
      [&.nav-scrolled]:bg-background/80 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:text-dark [&.nav-scrolled]:border-dark/10 [&.nav-scrolled]:shadow-2xl"
        >
            <div className="font-sans font-bold text-xl cursor-pointer tracking-tight uppercase">Infobox Radio</div>

            <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
                <a href="#features" className="hover:-translate-y-[1px] hover:text-accent transition-all duration-300">Features</a>
                <a href="#philosophy" className="hover:-translate-y-[1px] hover:text-accent transition-all duration-300">Philosophy</a>
                <a href="#protocol" className="hover:-translate-y-[1px] hover:text-accent transition-all duration-300">Protocol</a>
            </div>

            <button
                className="bg-accent text-primary px-6 py-3 rounded-[2rem] font-sans font-bold text-sm overflow-hidden relative group hover:scale-[1.03] transition-transform duration-300"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
                <div className="absolute inset-0 bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                <span className="relative z-10 pointer-events-none tracking-widest uppercase">Book Call</span>
            </button>
        </nav>
    );
}
