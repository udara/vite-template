/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'nodes': "url('/img/bg3.png')",
            },
            fontSize: {
                'xxs': ['0.60rem', '0.60rem'],
            },
        },
        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'warning': '#d53c3c',
            'primary-color': 'rgb(65, 75, 178)',
            'primary-light-color': '#b8bdf4',
            'primary-form-color': 'rgb(162, 160, 160)',
            'primary-form-border-color': 'rgb(219, 219, 219)'
        },
        fontFamily: {
            spoof: ["Spoof"]
        }
    },
    plugins: [],
}

