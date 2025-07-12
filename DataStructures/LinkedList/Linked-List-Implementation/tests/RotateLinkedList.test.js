const LinkedList = require("../linkedList");
require("../RotateLinkedList/RotateLinkedList");

test("Check if the function para,eter is number  ", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const l1 = new LinkedList();
  // l1.add(1);
  // l1.add(2);
  // l1.add(3);
  // l1.add(6);
  l1.RotateLinkedList("6");

  expect(logSpy).toHaveBeenCalledWith("Enter a vaild number");

  logSpy.mockRestore();
});
test("Check if the function para,eter less or equal than 0 ", () => {
  const l = new LinkedList();
  l.add(1);
  l.add(2);

  // expect(l.head.data).toBe(0);
  // expect(l.head.next.data).toBe(1);
  // expect(l.add(2)).toBe();
  expect(l.RotateLinkedList(0)).toBe();
});
test("Check if the function parameter greatter than size  ", () => {
  const l1 = new LinkedList();
  l1.add(1);
  l1.add(2);
  l1.add(3);
  l1.add(4);

  l1.add(5);
  l1.add(6);

  l1.add(7);

  l1.add(8);
  l1.RotateLinkedList(12);

  expect("Head -> " + l1.printList() + "Null").toBe(
    "Head -> 5 -> 6 -> 7 -> 8 -> 1 -> 2 -> 3 -> 4 -> Null"
  );
});
