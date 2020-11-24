import { expect } from "chai";
import { todos } from "../redux/reducers";

//testing with chai

describe("The todos reducer", () => {
  it("adds a new todo when CREATE_TODO action is received", () => {
    //need fake current state and then a payload to pass through
    const fakeTodo = { text: "hello", iscompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: {
        todo: fakeTodo,
      },
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
