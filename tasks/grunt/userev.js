module.exports = {
  jsApp: {
    src: [
      'views/app/_footer.ejs',
      '<%= public.js %>/app.bundle.min.*.js',
      'test/config/karma.conf.dist.js'
    ],
    options: {
      hash: /(\.[a-f0-9]{8})/,
      patterns: {
        'jsApp': /app.bundle.min.[a-z0-9.]*js/,
      },
    },
  },
  cssApp: {
    src: ['views/app/_header.ejs', '<%= public.css %>/app.min.*.css'],
    options: {
      hash: /(\.[a-f0-9]{8})/,
      patterns: {
        'cssApp': /app.min.[a-z0-9.]*css/,
      },
    },
  }
};