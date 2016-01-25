module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  files: [
    // Specify what to lint (and !not lint)
    'assets/**/*.js',
    'controllers/**/*.js',
    'lib/**/*.js',
    'db/**/*.js',
    'models/**/*.js',
    'app.js'
  ]
};