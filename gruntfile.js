module.exports = gruntConfig;

function gruntConfig(grunt) {
  var
    pkg = grunt.file.readJSON('package.json'),
    tasks = require('./tasks/grunt'),
    gruntConfig;

  gruntConfig = {
    app: {
      js: 'assets/app/js',
      css: 'assets/app/css',
      image: 'assets/app/img',
      font: 'assets/app/fonts',
      video: 'assets/app/video'
    },
    common: {
      js: 'assets/common/js',
      css: 'assets/common/css',
      image: 'assets/common/img',
      font: 'assets/common/fonts',
      video: 'assets/common/video'
    },
    public: {
      js: 'public/js',
      css: 'public/css',
      image: 'public/img',
      font: 'public/fonts',
      video: 'public/video'
    }
  };

  for (var task in tasks) {
    gruntConfig[task] = tasks[task];
  }

  grunt.config.init(gruntConfig);

  for (var dep in pkg.devDependencies) {
    if (dep !== 'grunt' && !dep.indexOf('grunt')) {
      grunt.loadNpmTasks(dep);
    }
  }

  grunt.registerTask('build:dev', [
    'env:dev',
    'sass:dev',
    'browserify'
  ]);

  grunt.registerTask('build:dist', [
    'env:prod',
    'clean',
    'sass:dev',
    'sass:dist',
    'browserify',
    'uglify',
    'filerev',
    'userev',
    'imagemin',
    'copy'
  ]);

  grunt.registerTask('build:watch', [
    'build:dev',
    'watch'
  ]);

  grunt.registerTask('server', ['bgShell:server']);

  grunt.registerTask('default', [
    'env:dev',
    'server'
  ]);

  grunt.registerTask('test:server', [
    'env:qa',
    'mocha_istanbul:server'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'test:server'
  ]);
}