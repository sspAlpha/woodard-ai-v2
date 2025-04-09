import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    autoprefixer(),
  ],
};

export default config;