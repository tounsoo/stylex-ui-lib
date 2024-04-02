import type { StorybookConfig } from "@storybook/react-vite";
import styleXPlugin from "@stylexjs/babel-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // 👇 Default prop filter, which excludes props from node_modules
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  docs: {
    autodocs: "tag",
  },
  async babel(config, { configType }) {
    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
      return {
        plugins: [
          [
            styleXPlugin,
            {
              dev: true,
              // Set this to true for snapshot testing
              // default: false
              test: false,
              // Required for CSS variable support
              unstable_moduleResolution: {
                // type: 'commonJS' | 'haste'
                // default: 'commonJS'
                type: "commonJS",
                // The absolute path to the root directory of your project
                rootDir: __dirname,
              },
            },
          ],
        ],
      };
    }
    return config;
  },
};
export default config;
