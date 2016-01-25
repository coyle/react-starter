module.exports = {
  all: {
    options: {
      compress: {
        drop_debugger: true,
        drop_console: true
      },
      sourceMap: false,
      screwIE8: true
    },
    files: {
      '<%= public.js %>/app.bundle.min.js': '<%= public.js %>/app.bundle.js'
    }
  }
};