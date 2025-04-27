module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        sans: ['Inter', 'Work Sans', 'Eczar', 'system-ui', 'sans-serif'],
        heading: ['Eczar', 'serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            p: {
              fontFamily: theme('fontFamily.body'),
              lineHeight: '1.75',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Important for SEO-rich content
  ],
}
