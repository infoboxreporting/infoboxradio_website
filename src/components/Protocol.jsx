import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene1 = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-20">
        <g className="origin-center animate-[spin_20s_linear_infinite]">
            {[...Array(12)].map((_, i) => (
                <rect key={i} x="48" y="5" width="4" height="15" fill="#E8E4DD" transform={`rotate(${i * 30} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="30" fill="none" stroke="#E8E4DD" strokeWidth="2" strokeDasharray="4 4" />
        </g>
    </svg>
);

const Scene2 = () => (
    <div className="w-full h-full absolute inset-0 opacity-20 flex flex-col">
        <div className="flex-1 border-b border-primary/20 bg-[linear-gradient(to_right,#E8E4DD22_1px,transparent_1px)] bg-[size:2rem_100%]"></div>
        <div className="flex-1 border-b border-primary/20 bg-[linear-gradient(to_right,#E8E4DD22_1px,transparent_1px)] bg-[size:2rem_100%]"></div>
        <div className="flex-1 border-b border-primary/20 bg-[linear-gradient(to_right,#E8E4DD22_1px,transparent_1px)] bg-[size:2rem_100%]"></div>
        <div className="flex-1 bg-[linear-gradient(to_right,#E8E4DD22_1px,transparent_1px)] bg-[size:2rem_100%]"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_#E63B2E] animate-[scan_3s_ease-in-out_infinite_alternate]" style={{ animationName: 'scan' }}></div>
        <style>{`@keyframes scan { from { transform: translateY(0); } to { transform: translateY(100vh); } }`}</style>
    </div>
);

const Scene3 = () => (
    <svg viewBox="0 0 200 100" className="w-full h-full absolute inset-0 opacity-30">
        <path
            d="M0,50 L40,50 L50,20 L65,90 L80,10 L95,80 L105,50 L200,50"
            fill="none"
            stroke="#E63B2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dash-anim"
            strokeDasharray="400"
            strokeDashoffset="400"
        />
        <style>{`
      .dash-anim {
        animation: drawPath 2s linear infinite;
      }
      @keyframes drawPath {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
    </svg>
);

export default function Protocol() {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    cardRefs.current = [];

    const addToRefs = el => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            cardRefs.current.forEach((card, index) => {
                if (index === cardRefs.current.length - 1) return; // Skip last card

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    animation: gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: "blur(20px)",
                        ease: "none"
                    })
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            num: "01",
            title: "Site Survey",
            desc: "Comprehensive RF mapping to allocate pristine frequencies and identify structural interference points.",
            Scene: Scene1
        },
        {
            num: "02",
            title: "Shadow PA",
            desc: "Rapid deployment of wind-proof transmitters cutting directly through extreme ambient engine noise.",
            Scene: Scene2
        },
        {
            num: "03",
            title: "Failsafe Act",
            desc: "Continuous, battery-isolated broadcasting guaranteeing redundancy independent of grid status.",
            Scene: Scene3
        }
    ];

    return (
        <section id="protocol" ref={containerRef} className="relative bg-dark pb-[10vh]">
            {steps.map((step, i) => (
                <div
                    key={i}
                    ref={addToRefs}
                    className="sticky top-0 h-[100dvh] w-full flex items-center justify-center p-6 md:p-12 overflow-hidden bg-dark text-primary origin-top"
                    style={{ zIndex: i + 1 }}
                >
                    {/* Card Surface */}
                    <div className="absolute inset-4 md:inset-8 border border-primary/10 rounded-[3rem] bg-dark flex flex-col md:flex-row items-center justify-between p-8 md:p-24 overflow-hidden shadow-2xl">
                        <step.Scene />

                        <div className="relative z-10 max-w-2xl">
                            <div className="font-mono text-accent text-lg md:text-2xl mb-6">/{step.num}</div>
                            <h2 className="font-sans font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6">{step.title}</h2>
                            <p className="font-mono text-primary/70 uppercase tracking-widest text-sm md:text-lg leading-relaxed max-w-lg">
                                {step.desc}
                            </p>
                        </div>

                        <div className="hidden md:block absolute right-24 bottom-24 font-mono text-[10px] text-primary/30 uppercase tracking-widest text-right">
                            System Operational <br />
                            Frequency: Active <br />
                            Protocol {step.num} Engaged
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
