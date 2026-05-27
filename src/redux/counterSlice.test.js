import counterReducer, { increment } from "./counterSlice";

test("Redux increment works correctly", () => {
  const initialState = { value: 0 };

  const newState = counterReducer(initialState, increment());

  expect(newState.value).toBe(1);
});