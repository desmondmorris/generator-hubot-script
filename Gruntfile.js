'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/**/*.js']
    },
    watch: {
      files: ['Gruntfile.js', 'test/**/*.js'],
      tasks: ['test']
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('test:watch', ['watch']);
  grunt.registerTask('default', ['test']);
};
