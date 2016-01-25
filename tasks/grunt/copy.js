module.exports = {
  fonts: {
    expand: true,
    src: [
      '<%= common.font %>/*',
      '<%= app.font %>/*'
    ],
    dest: '<%= public.font %>/',
    flatten: true,
    filter: 'isFile'
  }
};