import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.concat(todo) };
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }
    case COMPLETE_TODO: {
      const { todo } = payload;
      const newState = {
        ...state,
        data: state.data.map((temp) => {
          if (temp.id === todo.id) {
            //spread operator then override property
            return todo;
          }
          return temp;
        }),
      };

      return newState;
    }
    case LOAD_TODOS_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case LOAD_TODOS_IN_PROGRESS:
      return { ...state, isLoading: true };
    case LOAD_TODOS_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
