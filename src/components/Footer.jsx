export default function Footer() {
    return (
        <footer className="bg-dark text-primary pt-24 pb-12 px-8 md:px-16 rounded-t-[4rem] -mt-10 relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-primary/20 pb-20 relative z-10">
                <div className="md:col-span-2">
                    <h3 className="font-sans font-bold text-3xl uppercase tracking-tighter mb-4">Infobox Radio</h3>
                    <p className="font-mono text-primary/60 hover:text-primary transition-colors uppercase tracking-widest text-xs max-w-xs leading-relaxed">
                        We bring radio to your local event. Pure information density. Zero dead spots. Failsafe communication.
                    </p>
                </div>

                <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
                    <span className="text-primary/40 mb-2">Architecture</span>
                    <a href="#features" className="hover:text-accent transition-colors">Features</a>
                    <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
                    <a href="#protocol" className="hover:text-accent transition-colors">Protocol</a>
                </div>

                <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
                    <span className="text-primary/40 mb-2">System Info</span>
                    <a href="#" className="hover:text-accent transition-colors">Signal Uplink</a>
                    <a href="#" className="hover:text-accent transition-colors">Telemetry Specs</a>
                    <a href="#" className="hover:text-accent transition-colors">Privacy Logs</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-widest text-primary/40 relative z-10">
                <div>© {new Date().getFullYear()} Infobox Radio. All protocols active.</div>

                <div className="flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-full border border-primary/10 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                    <span className="text-primary/80">System Operational</span>
                </div>
            </div>

            {/* Background massive typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-primary opacity-[0.02] pointer-events-none whitespace-nowrap z-0">
                SIGNAL
            </div>
        </footer>
    );
}
