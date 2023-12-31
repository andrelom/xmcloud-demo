const { join } = require('path')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-sky-900',
    'text-sky-900',
    'text-white',
    'border-sky-900',
    'aspect-square',
    'aspect-video',
    'neptune',
    'ocean',
    'space',
    'blend',
    'water',
    'cerulean',
    'electric',
    'onyx',
    'ultra',
    'gravity',
    'pearl',
    'slate',
    'medium',
    'midnight',
    'deepsea',
    'tangerine',
    'peacock',
    'pear',
    'frenchRose',
    'lollipop',
    'lime',
    'cornflower',
    'azure',
    'sangria',
    'butter',
    'gray',
    'sky',
    'stone',
    'neutral',
    'slate',
  ], //Classes to always include
  theme: {
    colors: {
      neptune: '#023859',
      ocean: '#025E73',
      space: '#272D30',
      blend: '#2E5B76',
      water: '#00769D',
      cerulean: '#00859D',
      electric: '#00859D',
      onyx: '#000000',
      ultra: '#ffffff',
      gravity: '#C9C9C9',
      pearl: '#E9E9E9',
      slate: '#E9E9E9',
      medium: '#666666',
      midnight: '#012840',
      deepsea: '#012E40',
      tangerine: '#f25e3d',
      peacock: '#3eaead',
      pear: '#90BD31',
      frenchRose: '#ff4275',
      lollipop: '#a528AB',
      lime: '#c6e234',
      cornflower: '#617cb1',
      azure: '#3cb8e5',
      sangria: '#8a038c',
      butter: '#ffD000',
      ...colors,
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
