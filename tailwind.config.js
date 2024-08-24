import NewTicket from './src/pages/NewTicket';

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      MyOwn: '#e9edf7',
      hover:'#e6f0f9',
      custome_2:'#f5f8fe',
      custome_eye:'#eff6fa',
      admin_apnel:'#318dc1',
      admin_shadow:'#40b3db',
      hover_admin_panel:'#2a78a4',
      PanelHeader:'#f5f8fe',
      PanelHeaderText:'#55768b',
      lovelygreen:'#e7f4fb',
      mygray:'#728d9f',
      theethic:'#f5f8fe',
      helloworld:'#f5f8fe',
      thecolor:'#55768b',
      thecolor2:'#318dc1',
      hello2:'#f5f8fe',
      NewTicket:'#318dc1',
      NewTicket2:'#2a78a4',
    },width: {
      '288': '32rem',
      
    },
    spacing: {
      '292': '31rem',
      '294': '35rem',
      '296': '43rem',
      '298': '51rem',
      '300': '59rem',
      '260': '28rem',
      '84': '22rem',
      '70': '17rem',
      '97': '25rem',
      '98': '26rem',
      '100': '33.5rem',
      '99': '33rem',
      '98': '26rem',
    },inset: {
      eye_top: '14rem', // Custom value 24rem
    }, boxShadow: {
      '3xl': '0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23)', // Custom intense shadow
      'custom-color': '0 10px 15px rgba(255, 165, 0, 0.5)' // Custom shadow with specific color (e.g., orange)
    },
    fontSize: {
      'huge': '32rem', // Define the custom font size
    },
  },
};
export const plugins = [];
