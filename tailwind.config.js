module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1F2937', // update to match logo
                accent: '#F59E0B',  // update to match logo
            },
        },
    },
    plugins: [],
};
