const SVG = require("./svg");

test("should render a 300 x 200 svg element", () => {
  const svg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const testSvg = new SVG();
  expect(testSvg.render()).toEqual(svg);
});

test("should append text element", () => {
  const textSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">A</text></svg>';
  const testSvg = new SVG();
  testSvg.setText("J", "red");
  expect(testSvg.render()).toEqual(textSvg);
});