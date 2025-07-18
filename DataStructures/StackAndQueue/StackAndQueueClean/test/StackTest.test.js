const Stack = require("../Stack");

test("Test pushing a node in to stack ", () => {
  const s = new Stack();
  expect(s.push(5)).toBe();
});

test("Test popping a node from the stack.", () => {
  const s = new Stack();
  expect(s.pop()).toBe("Cant not pop -stack because it is empty");
  s.push(1);
  s.push(2);
  expect(s.pop()).toBe(2);
});
test("Test checking if the stack is empty", () => {
  const s = new Stack();
  expect(s.isEmpty()).toBe(true);
  s.push(1);
  s.push(2);
  expect(s.isEmpty()).toBe(false);
});
