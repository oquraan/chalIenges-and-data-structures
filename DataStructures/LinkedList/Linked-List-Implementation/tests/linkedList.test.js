const linkedList = require("../linkedList");

test("add new node ", () => {
  const l = new linkedList();
  expect(l.add(0)).toBe();
  l.add(1);
  l.add(2);

  expect(l.head.data).toBe(0);
  expect(l.head.next.data).toBe(1);
  expect(l.add(2)).toBe();

  expect(l.remove(2)).toBe();
});

test("Remove node ", () => {
  const l = new linkedList();
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  l.remove(2);
  expect(logSpy).toHaveBeenCalledWith("The linkedlist is empty  ");

  l.add(1);

  expect(l.remove(2)).toBe();

  logSpy.mockRestore();
});
test("Remove node2 ", () => {
  const l = new linkedList();
  l.add(1);

  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  l.remove(1);
  expect(l.remove(1)).toBe();

  logSpy.mockRestore();
});
test("Include  node ", () => {
  const l = new linkedList();
  l.add(1);

  expect(l.includes(1)).toBe(true);
  l.remove(1);
  expect(l.includes(1)).toBe("the list is empty ");

  l.add(1);
  l.add(2);
  l.remove(1);
  expect(l.includes(1)).toBe(false);
  expect(l.includes(10)).toBe(false);
});

test("insert node at spesific index   ", () => {
  //the first senario if the list is empty
  const l = new linkedList();
  expect(l.insertAt(1, 2)).toBe(); //my code return nothing ; but i think is it not recommended

  // to check if the code return spesific meesage
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  l.insertAt(1, 2);
  expect(logSpy).toHaveBeenCalledWith("the index greater than list ");

  logSpy.mockRestore();
  ////////////////////////////////////////

  // to check if the code insert the data in first index of the list is empty
  expect(l.insertAt(1, 0)).toBe();
  //
  expect(l.insertAt(1, 2)).toBe();

  logSpy1 = jest.spyOn(console, "log").mockImplementation(() => {});
  l.add(1);
  l.add(2);
  l.add(3);
  l.insertAt(1, 10);
  expect(logSpy1).toHaveBeenCalledWith("the index greater than list ");

  logSpy1.mockRestore();
});
