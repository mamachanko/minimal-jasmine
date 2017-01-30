describe("App", function() {
  var App = require('../lib/App');
  var app;

  beforeEach(function() {
    app = new App();
  });

  it("should know it's an app", function() {
    expect(app.areYou("an app")).toBeTruthy();
  });

  it("should know it's not something other than an app", function() {
    expect(app.areYou("something else")).toBeFalsy();
  });
});
