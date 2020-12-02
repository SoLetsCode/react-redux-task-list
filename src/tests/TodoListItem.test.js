import { expect } from "chai";
import { getBorderStyleForDate } from "../components/TodoList/TodoListItem";

describe("getBorderStyleForDate", () => {
  it("returns none when the date is less than five days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 3);
    const expected = "none";
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).to.equal(expected);
  });
  it("returns a border when date is more than five days old", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 6);
    const expected = "5px solid red";
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).to.equal(expected);
  });
});
