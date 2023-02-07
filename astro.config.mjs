import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), vue(), solidJs(), lit(), alpinejs()],
});