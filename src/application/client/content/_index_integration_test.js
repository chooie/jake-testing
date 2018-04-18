const assert = require("_assert");
const cssHelper = require("./_css_test_helper.js");
const colors = require("./colors.js");
const config = require("../../shared/config.js");

describe("CSS: Home page", function() {
  let frame;

  before(function(done) {
    this.timeout(10 * 1000);
    var options = {
      src: `/base/${config.paths.viewsDirectory}/index.html`,
      width: cssHelper.smallestDeviceWidth
    };
    frame = cssHelper.createFrame(options, function(err, frame) {
      if (err) throw Error(err);
      done();
    });
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();
  });

  it("has a background color", function() {
    assert.equal(cssHelper.getBackgroundColor(frame.body()), colors.blue);
  });
});
