import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        'red-orange': {
          '50': '#fef3f2',
          '100': '#ffe3e1',
          '200': '#ffcbc8',
          '300': '#ffa8a2',
          '400': '#fc766d',
          '500': '#f44236',
          '600': '#e22c20',
          '700': '#be2217',
          '800': '#9d1f17',
          '900': '#82211a',
          '950': '#470c08',
        },
        gallery: {
          '50': '#f8f8f8',
          '100': '#ebebeb',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
      },
      fontFamily: {
        'changa-one': ['Changa One', 'sans-serif'],
        changa: ['Changa', 'sans-serif'],
        lalezar: ['Lalezar', 'cursive'],
      },
    },
  },
  plugins: [],
}
