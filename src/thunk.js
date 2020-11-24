import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo,
} from "./redux/actions";

export const displayAlert = (error) => {
  alert(`error ${error}`);
};

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e + "loadTodosInProgress"));
  }
};

export const addTodoRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: { "Content-type": "application/json" },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e + " addTodoRequest"));
  }
};

export const removeTodoRequest = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e + "removeTodoRequest"));
  }
};

export const completeTodoRequest = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "post",
      }
    );
    const completedTodo = await response.json();
    dispatch(completeTodo(completedTodo));
  } catch (e) {
    dispatch(displayAlert(e + "completeTodoRequest"));
  }
};
