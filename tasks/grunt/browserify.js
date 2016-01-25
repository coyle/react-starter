module.exports = {
  appBundle: {
    src: '<%= app.js %>/app.jsx',
    dest: '<%= public.js %>/app.bundle.js',
    options: {
      transform: [['babelify', { optional: 'es7.objectRestSpread' }]],
      browserifyOptions: {
        extensions: ['.jsx']
      }
    }
  }
};