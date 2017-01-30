function App() {}

App.prototype.areYou = function(aThing) {
  return aThing == "an app";
};

module.exports = App;
