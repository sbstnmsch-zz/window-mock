/* globals module */
module.exports = {
  options: {
    configFile: '<%= paths.src %>/eslint.json'
  },
  target: [
    '<%= paths.src %>**/*.js'
  ]
};
