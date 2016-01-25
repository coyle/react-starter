var
  { useQueries } = require('history'),
  createBrowserHistory = require('history/lib/createBrowserHistory'),
  useStandardScroll = require('scroll-behavior/lib/useStandardScroll');

module.exports = {
  create: create
};

function create() {
  var
    history = createBrowserHistory;

  history = useQueries(history);
  history = useStandardScroll(history)();

  return history;
}
