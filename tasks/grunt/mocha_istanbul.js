module.exports = {
  server: {
    src: [
      'test/config/mocha.conf.js',
      'test/config/istanbul.conf.js',
      'test/server/**/*.uspec.js'
    ], // the folder, not the files
    options: {
      coverage: true,
      coverageFolder: 'test/reports/server/',
      root: '/',
      excludes: [''],
      reportFormats: ['lcov', 'cobertura'],
      check: {
        statements: 65,
        branches: 45,
        functions: 45,
        lines: 65
      }
    }
  }
};