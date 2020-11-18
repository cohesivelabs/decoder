module.exports = {
  tailwind: {
    // This can't be outside of src/ or it won't get picked up by CRA bundling
    config: "./src/tailwind.config.js",
    styled: "@emotion/styled/macro",
  },
};
