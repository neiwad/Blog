module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {
      colors: {
        'darkblue': '#11052C',
        'purple': '#3D087B',
        'pink': '#F43B86',
        'yellow': '#FFE459'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}