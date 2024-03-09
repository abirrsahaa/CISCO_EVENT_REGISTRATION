/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        benderlight: ["light"],
        benderbold: ["bold"],
        benderregular: ["regular"],
      },
    },
  },
  plugins: [daisyui],
};
