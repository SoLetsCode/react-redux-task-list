import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../../thunk";
import { getTodos } from "../../selectors/selectors";
import styled from "styled-components";

const TodoFormStyle = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

function TodoForm({ todos, onCreatePressed }) {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <TodoFormStyle>
      <NewTodoInput
        type="text"
        value={inputValue}
        onChange={inputChange}
        placeholder="Type your todo here"
      />
      <NewTodoButton
        onClick={() => {
          onCreatePressed(inputValue);
          setInputValue("");
        }}
      >
        Create Todo
      </NewTodoButton>
    </TodoFormStyle>
  );
}

//returns pieces of redux state that our component needs access to.
const mapStateToProps = (state) => ({ todos: getTodos(state) });

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
