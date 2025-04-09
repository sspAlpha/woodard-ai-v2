/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}', 
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          black: "#000",
          white: "#fff",
          grey: {
            '100': "#e6e7e8",
            '200': "#1a2a36",
            '300': "#6c6f70",
          },
          slateBlue: "#394a58",
          beige: "#cea98c",
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'], 
          ebGaramond: ['"EB Garamond"', 'serif'],
        },
        fontSize: {
          h1: ['4.2rem', { lineHeight: '4.62rem', letterSpacing: '0.0875rem' }], 
          h2: ['3.75rem', { lineHeight: '4.125rem', letterSpacing: '0.0875rem' }],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'), 
      require('daisyui'), 
      function ({ addBase }) {
        addBase({
          html: {
            fontSize: '62.5%', // Set base font size to 62.5% (1rem = 10px)
          },
          h1: {
            fontFamily: '"EB Garamond", serif',
            fontWeight: '300', 
            fontSize: '4.2rem', 
            letterSpacing: '0.0875rem',
            lineHeight: '4.62rem', 
            color: '#fff',
          },
          h2: {
            fontFamily: '"EB Garamond", serif',
            fontWeight: '300', 
            fontSize: '3.75rem', 
            letterSpacing: '0.0875rem',
            lineHeight: '4.125rem', 
            color: '#fff',
          },
          p: {
            fontFamily: 'Roboto, sans-serif', 
            fontSize: '1.8rem', 
            letterSpacing: '0.0875rem',
            lineHeight: '3.6rem',
          },
        });
      },
      function ({ addUtilities }) {
        addUtilities({
          '.link': {
            borderBottom: '1px solid #fff',
          },
          '.link:hover': {
            borderBottom: 'none',
          },
          '.link-text': {
            fontFamily: '"Roboto", sans-serif',
            fontWeight: '600',
            fontSize: '2.25rem', 
            lineHeight: '3.2rem', 
            color: '#fff',
            textDecoration: 'underline',
            textTransform: 'uppercase',
            letterSpacing: '0.225rem',
            transition: 'color 0.3s ease',
          },
          '.cta-link-grey': {
            color: '#1a2a36',
            textDecoration: 'none',
          },
          'cta-link-grey:hover': {
            textDecoration: 'underline',
          },
          'cta-link-text-grey': {
            fontFamily: '"Roboto", sans-serif',
            fontWeight: '600',
            fontSize: '3.125rem', 
            lineHeight: '6.25rem', 
            color: '#1a2a36',
            textTransform: 'uppercase',
            letterSpacing: '0.15625rem',
          },
          '.cta-link-white': {
            color: '#fff',
            textDecoration: 'none',
          },
          'cta-link-white:hover': {
            textDecoration: 'underline',
          },
          '.cta-link-text-white': {
            fontFamily: '"Roboto", sans-serif',
            fontWeight: '600',
            fontSize: '3.125rem', 
            lineHeight: '6.25rem', 
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.15625rem',
          },
          '.h2-grey': {
            fontFamily: '"EB Garamond", serif',
            fontWeight: '300',
            fontSize: '3.75rem',
            lineHeight: '4.125rem',
            letterSpacing: '0.0875rem',
            color: '##1a2a36'
          },
        });
      },
    ],
    daisyui: {
      base: false, // Disable base styles
      styled: true, // Enable styled components
      utils: false, // Disable utility classes
      logs: true, // Show DaisyUI logs in the console
      themes: false, // Disable themes
    },
};