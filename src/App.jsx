import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-background relative selection:bg-accent selection:text-background">
            {/* Noise Overlay Filter */}
            <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <Protocol />
            <CTA />
            <Footer />
        </div>
    );
}
