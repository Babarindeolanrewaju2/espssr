require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/transform-runtime",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-class-properties",
  ],
});

require("./server");
