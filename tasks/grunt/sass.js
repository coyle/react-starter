module.exports = {
  // Concating
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= public.css %>/app.css': '<%= app.css %>/app.scss'
    }
  },
  // Concating and minifying
  dist: {
    options: {
      style: 'compressed',
      sourcemap: 'none'
    },
    files: {
      '<%= public.css %>/app.min.css': '<%= public.css %>/app.css'
    }
  }
};