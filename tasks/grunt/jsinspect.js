module.exports = {
  js: {
    options: {
      threshold: 30,
      diff: true,
      identifiers: false,
      failOnMatch: true,
      suppress: 100,
      reporter: 'default'
    },
    src: [
      // Specify what to lint (and !not lint)
      'assets/**/*.js',
      'controllers/**/*.js',
      'lib/**/*.js',
      'db/**/*.js',
      'app.js'
    ]
  }
};