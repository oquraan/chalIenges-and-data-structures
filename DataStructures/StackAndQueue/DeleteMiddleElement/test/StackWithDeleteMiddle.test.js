const StackWithDeleteMiddle = require("../StackWithDeleteMiddle");

test("Check if the Stack is empty ", () => {
  const s = new StackWithDeleteMiddle();
  expect(s.deleteMiddle()).toBe("the Stack is empty  ");
});

test("Check if the Stack has one eleement  ", () => {
  const s = new StackWithDeleteMiddle();
  s.push(1);
  expect(s.deleteMiddle()).toBe("you have one eleement");
});

test("Deleting the middle element of a stack odd number of elements ", () => {
  const s = new StackWithDeleteMiddle();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.deleteMiddle()).toBe("Odd");
});
test("Deleting the middle element of a stack Even number of elements ", () => {
  const s = new StackWithDeleteMiddle();
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.deleteMiddle()).toBe("Even");
});
