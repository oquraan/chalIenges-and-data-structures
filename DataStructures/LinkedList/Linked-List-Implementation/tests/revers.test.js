const LinkedList = require("../linkedList.js");
require("../reverse/reverse.js");

test("The list not empty list ", () => {
  const l = new LinkedList();

  // const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  // l.Reverse();

  // expect(logSpy).toHaveBeenCalledWith("the list is empty ");

  // logSpy.mockRestore();

  expect(l.Reverse()).toBe(null);
});

test("The list is contain single list node ", () => {
  const l = new LinkedList();
  l.add(1);

  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  l.Reverse();

  expect(logSpy).toHaveBeenCalledWith("This is a single list node ");

  logSpy.mockRestore();
});

test("Test reversing a non-empty list ", () => {
  const l = new LinkedList();

  l.add(1);
  l.add(2);
  l.add(3);

  // const l2 = l;
  // l.Reverse();
  expect(l.Reverse().data).toBe(l.head.data);
  expect(l.Reverse().next).toBe(l.head.next);

  // expect(l.Reverse()).toBe(l2.Reverse());
});

test("Test reversing a list with duplicate values", () => {
  const l = new LinkedList();

  l.add(1);
  l.add(3);
  l.add(3);

  const firstValueBeforeRevers = l.head.data,
    secondValueBeforeRevers = l.head.next.data,
    thiredValueBeforeRevers = l.head.next.next.data;

  expect(l.Reverse().data).toBe(l.head.data);
  expect(l.Reverse().next).toBe(l.head.next);

  l.Reverse();
  expect(l.head.data).toBe(thiredValueBeforeRevers);
  expect(l.head.next.data).toBe(secondValueBeforeRevers);

  expect(l.head.next.next.data).toBe(firstValueBeforeRevers);
});
