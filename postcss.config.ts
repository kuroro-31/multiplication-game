import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
  plugins: [tailwindcss({ config: "./tailwind.config.ts" }), autoprefixer],
};
