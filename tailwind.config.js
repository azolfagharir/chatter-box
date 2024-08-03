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
      admin_apnel:'#318dc1',
      admin_shadow:'#40b3db',
      hover_admin_panel:'#2a78a4',
      PanelHeader:'#f5f8fe',
      PanelHeaderText:'#55768b',
      lovelygreen:'#e7f4fb',
      mygray:'#728d9f',
    },width: {
      '288': '32rem',
    },
    spacing: {
      '292': '31rem',
    },inset: {
      eye_top: '14rem', // Custom value
    }, boxShadow: {
      '3xl': '0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23)', // Custom intense shadow
      'custom-color': '0 10px 15px rgba(255, 165, 0, 0.5)' // Custom shadow with specific color (e.g., orange)
    },
  },
};
export const plugins = [];
