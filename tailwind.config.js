/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F5F3EE',
                dark: '#111111',
                primary: '#E8E4DD',
                accent: '#E63B2E'
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                serif: ['"DM Serif Display"', 'serif'],
                mono: ['"Space Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
