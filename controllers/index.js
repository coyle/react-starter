module.exports = {
  health: health,
  index: index
};

function health(req, res) {
  res.status(200).json({status: 'Lasers primed and ready to fire!'});
}

function index(req, res) {
  res.render('app/index');
}
