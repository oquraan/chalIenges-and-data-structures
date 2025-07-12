const Queue = require("../Queue");

test("Test Enqueue a node from the Queue ", () => {
  const s = new Queue();
  expect(s.Enqueue(1)).toBe();
  expect(s.Enqueue(2)).toBe();
});

test(" Test dequeuing a node from the queue.", () => {
  const s = new Queue();
  expect(s.Dequeue()).toBe(
    "you can not remove any node becuse  the queue is empty "
  );
  s.Enqueue(1);
  expect(s.Dequeue()).toBe(1);
  s.Enqueue(1);

  s.Enqueue(2);
  expect(s.Dequeue()).toBe(1);
});
test("Test checking if the queue is empty.", () => {
  const s = new Queue();
  expect(s.isEmpty()).toBe(true);
  s.Enqueue(1);
  s.Enqueue(2);
  expect(s.isEmpty()).toBe(false);
});
