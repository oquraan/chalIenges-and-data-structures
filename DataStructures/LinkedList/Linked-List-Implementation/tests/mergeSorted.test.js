const LinkedList = require("../linkedList");
require("../MergeStored/mergeStored");

test("Check if theboth of  list are  empty ", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const l1 = new LinkedList();
  // l1.add(1);
  // l1.add(2);
  // l1.add(3);
  // l1.add(6);

  const l2 = new LinkedList();
  // l2.add(2);
  // l2.add(5);
  // l2.add(6);
  // l2.add(7);
  const list3 = new LinkedList();
  list3.mergeSortedLists(l2, l1);

  expect(logSpy).toHaveBeenCalledWith("these lists are empty  ");

  logSpy.mockRestore();
});

test("Check if the first list is empty ", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const l1 = new LinkedList();
  // l1.add(1);
  // l1.add(2);
  // l1.add(3);
  // l1.add(6);

  const l2 = new LinkedList();
  l2.add(2);
  l2.add(5);
  l2.add(6);
  l2.add(7);
  const list3 = new LinkedList();
  list3.mergeSortedLists(l1, l2);

  expect(logSpy).toHaveBeenCalledWith("the first  list is empty  empty  ");

  logSpy.mockRestore();
});

test("Check if the SECOND list is empty ", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const l1 = new LinkedList();
  l1.add(1);
  l1.add(2);
  l1.add(3);
  l1.add(6);

  const l2 = new LinkedList();
  // l2.add(2);
  // l2.add(5);
  // l2.add(6);
  // l2.add(7);
  const list3 = new LinkedList();
  list3.mergeSortedLists(l1, l2);

  expect(logSpy).toHaveBeenCalledWith("the secound list is  empty  ");

  logSpy.mockRestore();
});
test("Check if the both of  list are not  empty ", () => {
  const l1 = new LinkedList();
  l1.add(1);
  l1.add(2);
  l1.add(3);
  l1.add(6);

  const l2 = new LinkedList();
  l2.add(2);
  l2.add(5);
  l2.add(6);
  l2.add(7);
  const list3 = new LinkedList();
  let l = new LinkedList();
  l = list3.mergeSortedLists(l1, l2);

  expect("Head -> " + l.printList() + "Null").toBe(
    "Head -> 1 -> 2 -> 2 -> 3 -> 5 -> 6 -> 6 -> 7 -> Null"
  );
});
