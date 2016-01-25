module.exports = {
  appScripts: {
    files: ['<%= app.js %>/**/*.js', '<%= app.js %>/**/*.jsx'],
    tasks: ['browserify:appBundle'],
    options: {
      livereload: false
    }
  },
  appStyles: {
    files: [
      '<%= app.css %>/**/*.scss'
    ],
    tasks: ['sass:dev'],
    options: {
      livereload: false
    }
  },

  commonScripts: {
    files: ['<%= common.js %>/**/*.js', '<%= common.js %>/**/*.jsx'],
    tasks: ['browserify:appBundle'],
    options: {
      livereload: false
    }
  },
  commonStyles: {
    files: [
      '<%= common.css %>/**/*.scss'
    ],
    tasks: ['sass:dev'],
    options: {
      livereload: false
    }
  }
};