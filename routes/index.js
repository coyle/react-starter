var
  controllers = require('../controllers');

module.exports = router;
console.log(controllers);
function router(app) {
  app.get('/health', controllers.health);
  app.get('/', controllers.index);
}
