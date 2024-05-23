module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["@babel/plugin-transform-optional-catch-binding", { "loose": true }],
      ["@babel/plugin-transform-nullish-coalescing-operator", { "loose": true }],
      ["@babel/plugin-transform-numeric-separator", { "loose": true }],
      ["@babel/plugin-transform-class-properties", { "loose": true }],
      ["@babel/plugin-transform-logical-assignment-operators", { "loose": true }],
      ["@babel/plugin-transform-optional-chaining", { "loose": true }],
      ["@babel/plugin-transform-async-generator-functions", { "loose": true }],
      ["@babel/plugin-transform-object-rest-spread", { "loose": true }],
      ["@babel/plugin-transform-private-methods", { "loose": true }],
      ["@babel/plugin-transform-private-property-in-object", { "loose": true }]
    ]
  };
};
