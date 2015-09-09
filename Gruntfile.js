module.exports = function(grunt) {

  'use strict';

  require('time-grunt')(grunt);

  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt', 'tasks'),
    init: true,
    data: {
      webpack: grunt.option('webpack') || '',
      paths: require(path.join(process.cwd(), 'grunt', 'options/') + 'paths.json')
    },
    loadGruntTasks: {
      config: require('./package.json'),
      scope: 'devDependencies'
    },
    postProcess: function() {}
  });
};
