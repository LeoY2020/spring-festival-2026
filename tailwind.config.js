/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 中式美学自定义颜色
        cinnabar: "#a41e22",
        gold: "#c89f62",
        ink: "#2a2a2a",
        paper: "#f8f5f2",
        "warm-brown": "#8c5e3a",
        "gray-ink": "#8c8c8c",
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'Source Han Serif CN', 'SimSun', 'serif'],
        display: ['Noto Serif SC', 'Source Han Serif CN', 'serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'paper': '0 4px 20px rgba(42, 42, 42, 0.06)',
        'paper-lg': '0 8px 40px rgba(42, 42, 42, 0.08)',
        'gold': '0 0 20px rgba(200, 159, 98, 0.3)',
        'cinnabar': '0 0 20px rgba(164, 30, 34, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "float-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "sway": {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in": "fade-in 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        "float-up": "float-up 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        "breathe": "breathe 10s ease-in-out infinite",
        "sway": "sway 4s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        'ink-out': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'brush-stroke': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
