/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // gridTemplateColumns: {
      //   'hellomeow' : '20% 80% 20%'
      // },
    },
  },
  plugins: [],
}


// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       gridTemplateColumns: {
//         // Simple 16 column grid
//         '16': 'repeat(16, minmax(0, 1fr))',

//         // Complex site-specific column configuration
//         'footer': '200px minmax(900px, 1fr) 100px',
//       }
//     }
//   }
// }
