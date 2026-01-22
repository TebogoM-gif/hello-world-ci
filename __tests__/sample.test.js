const hello = require("../index");

test("returns Hello World from Preview Deployment", () => {
  expect(hello()).toBe("Hello World from Preview Deployment 🚀");
});
