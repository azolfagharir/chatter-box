/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      MyOwn: '#e9edf7',
      custome_2:'#f5f8fe',
      custome_eye:'#eff6fa',
    },width: {
      '288': '32rem',
      '69': '116rem',
    },
  },
};
export const plugins = [];
