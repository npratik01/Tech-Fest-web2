/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#00d4ff",
          purple: "#a855f7",
          pink: "#ec4899",
          green: "#10b981",
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: {
            "box-shadow":
              "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff",
          },
          to: {
            "box-shadow":
              "0 0 20px #a855f7, 0 0 30px #a855f7, 0 0 40px #a855f7",
          },
        },
      },
    },
  },
  plugins: [],
};
