import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  border-bottom: ${(props) =>
    getBorderStyleForDate(new Date(props.createdAt), Date.now())};
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

//created to allow for testing styled div
export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 86400000 * 5)
    ? "none"
    : "5px solid red";

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

const CompletedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const IsComplete = styled.h3`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export default function TodoListItem({
  todo,
  onRemovedPressed,
  onCompletePressed,
}) {
  return (
    <TodoItemContainer createdAt={todo.createdAt}>
      <IsComplete isCompleted={todo.isCompleted}>{todo.text}</IsComplete>
      <p>Created at:&nbsp;{new Date(todo.createdAt).toLocaleDateString()}</p>
      <ButtonsContainer>
        <CompletedButton onClick={() => onCompletePressed(todo.id)}>
          Mark As Completed
        </CompletedButton>
        <RemoveButton onClick={() => onRemovedPressed(todo.id)}>
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </TodoItemContainer>
  );
}
