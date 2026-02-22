import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Image
            gsap.to(imageRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Text Reveal
            gsap.from('.reveal-text', {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="philosophy" ref={sectionRef} className="relative w-full min-h-[80vh] bg-dark flex flex-col items-center justify-center overflow-hidden py-32 px-6">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1590483489839-84e5b7fbdedb?q=80&w=2000&auto=format&fit=crop"
                    alt="Concrete Texture"
                    className="w-full h-[130%] object-cover opacity-10 grayscale scale-110"
                />
            </div>

            <div ref={textRef} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                <p className="reveal-text font-mono text-primary/60 text-sm md:text-base uppercase tracking-widest mb-12 max-w-2xl leading-relaxed">
                    Most event PA systems focus on: fragile speakers, scattered audio, and inevitable dead zones.
                </p>

                <h2 className="reveal-text font-sans font-bold text-4xl md:text-6xl lg:text-8xl text-primary tracking-tighter leading-none uppercase">
                    We focus on: <br />
                    <span className="font-serif italic text-accent capitalize ml-4 inline-block transform -translate-y-2">Pure Signal Density.</span>
                </h2>
            </div>
        </section>
    );
}
