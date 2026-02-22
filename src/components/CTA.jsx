import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="bg-background py-32 px-6 flex flex-col items-center justify-center text-center relative z-10 rounded-t-[4rem] -mt-10">
            <h2 className="font-sans font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-dark max-w-3xl leading-none">
                Ready to <span className="font-serif italic text-accent capitalize">Initialize?</span>
            </h2>
            <p className="font-mono text-dark/70 uppercase tracking-widest text-sm md:text-base mb-12 max-w-xl">
                Deploy redundant FM broadcast architecture at your next event and eliminate dead zones completely.
            </p>

            <button
                className="bg-accent text-background px-10 py-5 rounded-[3rem] font-sans font-bold text-xl overflow-hidden relative group hover:scale-[1.03] transition-transform duration-300 flex items-center gap-3 drop-shadow-2xl"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
                <div className="absolute inset-0 bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                <span className="relative z-10 pointer-events-none flex items-center gap-2 tracking-widest uppercase">
                    Book an introduction call <ArrowRight size={24} />
                </span>
            </button>
        </section>
    );
}
