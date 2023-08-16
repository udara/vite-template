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
            'light-blue': '#798fef',
            brown: {
                light: '#ded8db'
            },
        },
    },
    plugins: [],
}

