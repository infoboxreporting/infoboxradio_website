import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 40,
                opacity: 0,
                stagger: 0.08,
                ease: 'power3.out',
                duration: 1.2,
                delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative h-[100dvh] w-full overflow-hidden flex items-end">
            {/* Background Image: concrete, brutalist architecture, raw materials, industrial */}
            <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Raw Brutalist Architecture"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
            />
            {/* Heavy Overlay - Primary to Dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/20 mix-blend-multiply"></div>

            {/* Content Bottom Left Third */}
            <div className="relative z-10 p-6 md:p-16 lg:p-24 w-full md:w-2/3 lg:w-1/2 flex flex-col items-start text-primary">
                <h1 className="flex flex-col mb-8 pointer-events-none">
                    <span className="hero-elem font-sans font-bold text-5xl md:text-7xl tracking-tighter uppercase">
                        Deploy the
                    </span>
                    <span className="hero-elem font-serif italic text-7xl md:text-9xl text-accent -mt-2 md:-mt-4">
                        Network.
                    </span>
                </h1>
                <p className="hero-elem font-mono text-sm md:text-base text-primary/70 mb-12 max-w-md uppercase tracking-widest leading-relaxed">
                    Robust FM broadcast infrastructure instantly converting extreme engine noise into pure signal density.
                </p>
                <button
                    className="hero-elem bg-accent text-background px-8 py-4 rounded-[2.5rem] font-sans font-bold text-lg overflow-hidden relative group hover:scale-[1.03] transition-transform duration-300 flex items-center gap-3"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                >
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                    <span className="relative z-10 pointer-events-none flex items-center gap-2 tracking-widest uppercase group-hover:text-dark transition-colors duration-300">
                        Establish Link <ArrowRight size={20} />
                    </span>
                </button>
            </div>
        </section>
    );
}
