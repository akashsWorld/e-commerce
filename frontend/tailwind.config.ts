import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'text':'#929292',
        'color-heading':'#3D3D3D',
        'color-blue':'#4072EE',
        'color-card':'#D4F1F9',
        'color-highlight':'#16C61C'
      },
    },
    fontFamily:{
      'heading':[ '"Source Sans 3"', 'serif'],
      'paragraph':['Lato', 'serif']
    }
  },
  plugins: [],
} satisfies Config;
