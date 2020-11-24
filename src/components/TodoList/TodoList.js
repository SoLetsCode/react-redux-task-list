import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodos, removeTodoRequest, completeTodoRequest } from "../../thunk";
import styled from "styled-components";
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "../../selectors/selectors";

//components
import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoListForm";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadingTodos,
  completedTodos,
  incompleteTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading</div>;
  const content = (
    <ListWrapper>
      <TodoForm />
      <h3>Incomplete</h3>

      {incompleteTodos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            onRemovedPressed={onRemovePressed}
            onCompletePressed={onCompletePressed}
            key={todo.id}
          />
        );
      })}
      <h3>Completed</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovedPressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
          key={todo.id}
        />
      ))}
    </ListWrapper>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
