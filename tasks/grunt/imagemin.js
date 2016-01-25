module.exports = {
  dynamic: {
    files: [{
      expand: true,
      flatten: true,
      cwd: 'assets/',
      src: ['**/*.{png,jpg,gif,ico}'],
      dest: '<%= public.image %>'
    }]
  }
};