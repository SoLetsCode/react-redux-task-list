import { expect } from "chai";
import { getCompletedTodos } from "../selectors/selectors";

describe("The getCompletedTodos selector", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      { text: "Say Hello", isCompleted: true },
      { text: "Goodbye", isCompleted: false },
    ];

    const expected = [{ text: "Say Hello", isCompleted: true }];

    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected);
  });
});
