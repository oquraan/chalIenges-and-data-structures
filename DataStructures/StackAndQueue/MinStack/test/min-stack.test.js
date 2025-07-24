const Stack = require("../MinStack");

test("Test retrieving the minimum element in the stack", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.getMin()).toBe(1);
});
test("Test popping elements and verifying the minimum element in the stack after the pop", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.getMin()).toBe(1);
  s.pop();
  expect(s.getMin()).toBe(1);
  s.pop();
  expect(s.getMin()).toBe("the Stack is empty  ");
});

test("Test pushing elements and verifying the minimum element in the stack after the push.", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.getMin()).toBe(1);
  s.pop();
  expect(s.getMin()).toBe(1);
  s.pop();
  expect(s.getMin()).toBe("the Stack is empty  ");
  s.push(1);
  s.push(2);
  s.push(1);
  s.push(0);
  expect(s.getMin()).toBe(0);
});
