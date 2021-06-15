module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.css", "./src/**/*.js"],
  },
  theme: {
    colors: {
      primary: {
        100: "rgb(var(--color-primary-100))",
        200: "rgb(var(--color-primary-200))",
        300: "rgb(var(--color-primary-300))",
        400: "rgb(var(--color-primary-400))",
        500: "rgb(var(--color-primary-500))",
        600: "rgb(var(--color-primary-600))",
        700: "rgb(var(--color-primary-700))",
        800: "rgb(var(--color-primary-800))",
        900: "rgb(var(--color-primary-900))",
      },
      secondary: "rgb(var(--color-secondary))",
      "gradient-start": "rgb(var(--color-gradient-start))",
      "gradient-end": "rgb(var(--color-gradient-end))",
      gray: {
        100: "rgb(var(--color-gray-100))",
        200: "rgb(var(--color-gray-200))",
        300: "rgb(var(--color-gray-300))",
        400: "rgb(var(--color-gray-400))",
        500: "rgb(var(--color-gray-500))",
        600: "rgb(var(--color-gray-600))",
        700: "rgb(var(--color-gray-700))",
        800: "rgb(var(--color-gray-800))",
      },
      success: {
        text: "rgb(var(--color-success-text))",
        pastel: "rgb(var(--color-success-pastel))",
        DEFAULT: "rgb(var(--color-success))",
      },
      info: {
        text: "rgb(var(--color-info-text))",
        pastel: "rgb(var(--color-info-pastel))",
        DEFAULT: "rgb(var(--color-info))",
      },
      warning: {
        text: "rgb(var(--color-warning-text))",
        pastel: "rgb(var(--color-warning))-pastel",
        DEFAULT: "rgb(var(--color-warning))",
      },
      danger: {
        text: "rgb(var(--color-danger-text))",
        pastel: "rgb(var(--color-danger-pastel))",
        DEFAULT: "rgb(var(--color-danger))",
      },
      white: "rgb(var(--color-white))",
      black: "rgb(var(--color-black))",
      transparent: "transparent",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      screens: {
        "mobile-only": { max: "767px" },
        "tablet-only": { min: "768px", max: "1023px" },
        "tablet-down": { max: "1023px" },
        "2xl-down": { max: "1440px" },
      },
      boxShadow: {
        inner: "inset 0 0px 8px 0 rgba(0, 0, 0, 0.16)",
        field: "0 0px 3px 2px rgb(224, 246, 248)",
        header:
          "0 1px 5px 0 rgba(33,37,41,0.08), 0 2px 2px 0 rgba(33,37,41,0.04), 0 3px 1px -2px rgba(33,37,41,0.04)",
        xs: "0 1px 5px 0 rgba(33,37,41,0.08), 0 2px 2px 0 rgba(33,37,41,0.04), 0 3px 1px -2px rgba(33,37,41,0.04)",
        sm: "0 2px 4px -1px rgba(33,37,41,0.08), 0 4px 5px 0 rgba(33,37,41,0.04), 0 1px 10px 0 rgba(33,37,41,0.04)",
        md: "0 3px 5px -1px rgba(33,37,41,0.08), 0 6px 10px 0 rgba(33,37,41,0.04), 0 1px 18px 0 rgba(33,37,41,0.04)",
        lg: "0 5px 5px -3px rgba(33,37,41,0.08), 0 8px 10px 1px rgba(33,37,41,0.04), 0 3px 14px 2px rgba(33,37,41,0.04)",
        xl: "0 8px 10px -5px rgba(33,37,41,0.08), 0 16px 24px 2px rgba(33,37,41,0.04), 0 6px 30px 5px rgba(33,37,41,0.04)",
        xxl: "0 11px 15px -7px rgba(33,37,41,0.08), 0 24px 38px 3px rgba(33,37,41,0.04), 0 9px 46px 8px rgba(33,37,41,0.04)",
      },
      borderWidth: {
        5: "5px",
        10: "10px",
        16: "16px",
        32: "32px",
      },
      fontSize: {
        xxs: "0.625rem",
        0: "0",
      },
      scale: {
        98: ".98",
        99: ".99",
        101: "1.01",
        102: "1.02",
      },
      listStyleType: {
        circle: "circle",
        square: "square",
      },
      margin: {
        0.75: "0.1875rem",
      },
      width: {
        4.5: "1.125rem",
        18.5: "4.625rem",
        sm: "28rem",
        md: "40rem",
        lg: "50rem",
        xl: "60rem",
        "2xl": "70rem",
        "3xl": "80rem",
        "4xl": "90rem",
        "5xl": "100rem",
      },
      minWidth: {
        22.4: "5.6rem",
        50: "12.5rem",
      },
      maxWidth: {
        80: "20rem",
      },
      height: {
        4.5: "1.125rem",
        18.5: "4.625rem",
        19: "4.75rem",
      },
      minHeight: {
        10.5: "2.625rem",
        14: "3.5rem",
      },
      maxHeight: {
        18.5: "4.625rem",
      },
      borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
      },
      opacity: {
        15: "0.15",
      },
      outline: {
        "gray-300": "2px solid rgb(var(--color-gray-300))",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
      },
      zIndex: {
        negative: -1,
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      padding: ["first", "last"],
      margin: ["first", "last"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      backgroundOpacity: ["active"],
      textColor: ["active"],
      fontWeight: ["hover", "focus"],
    },
  },
};
