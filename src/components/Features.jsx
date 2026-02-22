import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radio, Activity, ShieldAlert, MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, text: "Zero Audio Dead Spots", icon: <Radio size={16} /> },
        { id: 2, text: "Wind-proof FM Shadow PA", icon: <Activity size={16} /> },
        { id: 3, text: "Cuts Through Engine Noise", icon: <ShieldAlert size={16} /> }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-48 w-full flex items-center justify-center">
            {cards.map((card, i) => {
                const isTop = i === 0;
                const scale = 1 - (i * 0.05);
                const yOffset = i * 12;
                const opacity = 1 - (i * 0.3);

                return (
                    <div
                        key={card.id}
                        className="absolute top-4 w-full bg-white border border-dark/10 p-4 rounded-2xl shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-3 font-mono text-sm uppercase tracking-wide text-dark"
                        style={{
                            transform: `translateY(${yOffset}px) scale(${scale})`,
                            opacity: opacity,
                            zIndex: 10 - i
                        }}
                    >
                        <div className={`p-2 rounded-full ${isTop ? 'bg-accent text-background' : 'bg-background text-dark/50'}`}>
                            {card.icon}
                        </div>
                        {card.text}
                    </div>
                );
            })}
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState("");
    const fullText = "> Crowd retention +24%\n> F&B sales increased\n> Filling track delays...\n> Music broadcast active.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
                setTimeout(() => { i = 0; setText(""); }, 4000); // Loop
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-48 w-full bg-dark text-primary p-5 rounded-2xl flex flex-col font-mono text-sm shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-primary/20">
                <span className="text-xs text-primary/60 uppercase tracking-widest text-[10px]">Telemetry Feed</span>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Live</span>
                </div>
            </div>
            <div className="whitespace-pre-line text-primary/90 leading-relaxed font-bold">
                {text}
                <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
            </div>
        </div>
    );
};

const SchedulerCard = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const [activeDay, setActiveDay] = useState(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to(cursorRef.current, {
                x: 100, y: 30, duration: 1, ease: "power2.inOut"
            })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .call(() => setActiveDay(3)) // Click 'W'
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(cursorRef.current, {
                    x: 180, y: 100, duration: 1, ease: "power2.inOut", delay: 0.5
                })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(cursorRef.current, { opacity: 0, duration: 0.3 })
                .set(cursorRef.current, { x: 0, y: 0, opacity: 1 })
                .call(() => setActiveDay(null));

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="h-48 w-full bg-white border border-dark/10 p-5 rounded-2xl relative shadow-sm flex flex-col">
            <div className="text-xs font-mono text-dark/50 uppercase tracking-widest mb-4">Emergency Comms Protocol</div>
            <div className="grid grid-cols-7 gap-2 mb-auto">
                {days.map((d, i) => (
                    <div
                        key={i}
                        className={`aspect-square rounded-md flex items-center justify-center font-mono text-xs font-bold transition-colors ${activeDay === i ? 'bg-accent text-background' : 'bg-background text-dark/70'}`}
                    >
                        {d}
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-4">
                <div className="bg-dark text-primary px-3 py-1 rounded-sm font-mono text-xs uppercase tracking-wide">
                    Activate Failsafe
                </div>
            </div>

            <div ref={cursorRef} className="absolute top-0 left-0 z-10 pointer-events-none drop-shadow-md">
                <MousePointer2 size={24} className="text-dark fill-dark" />
            </div>
        </div>
    );
};

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                ease: 'power3.out',
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
            <div className="mb-20 max-w-2xl">
                <h2 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4 text-dark">
                    Engineered for <span className="font-serif italic text-accent capitalize">Performance.</span>
                </h2>
                <p className="font-mono text-dark/70 uppercase tracking-widest text-sm leading-relaxed">
                    Functional software micro-UIs demonstrating our core capabilities in high-noise environments.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="feature-card bg-background border border-dark/10 rounded-[2rem] p-8 shadow-xl flex flex-col">
                    <h3 className="font-sans font-bold text-2xl uppercase tracking-tight mb-2 text-dark">Diagnostic Coverage</h3>
                    <p className="font-mono text-xs text-dark/60 uppercase tracking-widest mb-8 leading-relaxed">
                        Deploy wind-proof FM Shadow PA networks that completely eliminate dead spots.
                    </p>
                    <div className="mt-auto">
                        <ShufflerCard />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="feature-card bg-background border border-dark/10 rounded-[2rem] p-8 shadow-xl flex flex-col">
                    <h3 className="font-sans font-bold text-2xl uppercase tracking-tight mb-2 text-dark">Revenue Telemetry</h3>
                    <p className="font-mono text-xs text-dark/60 uppercase tracking-widest mb-8 leading-relaxed">
                        Fill track delays with interactive broadcasts to increase crowd retention and F&B sales.
                    </p>
                    <div className="mt-auto">
                        <TypewriterCard />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="feature-card bg-background border border-dark/10 rounded-[2rem] p-8 shadow-xl flex flex-col">
                    <h3 className="font-sans font-bold text-2xl uppercase tracking-tight mb-2 text-dark">Failsafe Protocol</h3>
                    <p className="font-mono text-xs text-dark/60 uppercase tracking-widest mb-8 leading-relaxed">
                        Battery-backed redundant broadcasting guarantees continuous transmission during localized power failures.
                    </p>
                    <div className="mt-auto">
                        <SchedulerCard />
                    </div>
                </div>

            </div>
        </section>
    );
}
