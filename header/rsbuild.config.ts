import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
      pluginSvelte(),
      pluginModuleFederation({
          name: 'federation_provider',
          exposes: {
              './Header': './src/Header.svelte',
          },
          //shared: ['svelte'],
      }),
  ],
});
