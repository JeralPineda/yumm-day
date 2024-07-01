/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Principales */
        primary: "rgb(124 59 58)",
        secondary: "rgb(209 114 110)",
        backgroundLight: "rgb(245 245 245)",
        backgroundDark: "#000000",
        textLight: "rgb(10 10 10)",
        tint: " rgb(245 245 245)",

        "primary-hover": "rgba(555, 555, 555, 0.4)",
        // secondary: "#F8F8F8",
        tertiary: "rgba(52, 54, 66, 1)",
        background: "#fbfbfb",
        grayBackground: "#f5f5f5",
        button: "rgba(41, 45, 50, 0.7)",
        "notification-container": "rgba(217, 236, 254, 1)",
        accents: {
          blue: "#418FD8",
        },

        error: {
          light: "#fff2f2",
          main: "rgba(186, 12, 47, 1)",
        },

        success: {
          light: "rgba(222, 237, 227, 1)",
          main: "rgba(38, 183, 105, 1)",
        },

        warning: {
          light: "rgba(255, 238, 225, 1)",
          main: "rgba(214, 124, 59, 1)",
        },

        info: {
          light: "rgba(217, 236, 254, 1)",
          main: "rgba(65, 143, 216, 1)",
        },

        /* contenedores */
        body: "#ECEDF1",
        modal: "#F3F5FA",
        "light-gray": "#EEEEEE",
        light: "rgba(0,0,0,0.5)",
        "extra-light": "rgba(0,0,0,0.03)",
        submenu: "rgba(243, 245, 250, 0.9)",

        "icon-light": "rgba(177, 185, 216, 1)",

        input: "rgba(240, 245, 250, 1)",
        "gray-body": "rgba(236, 237, 241, 1)",
        "gray-light": "rgba(238, 238, 238, 1)",

        /* Textos */
        "text-subtitle": "rgba(52, 54, 66, 1)",

        /* Iconos */
        iconBackground: "rgba(233, 200, 200, 0.18)",
        iconBackgroundHover: "rgba(233, 200, 200, 0.30)",
        iconBorder: "rgba(186, 12, 47, 0.3)",
      },
    },
  },
  plugins: [],
};
