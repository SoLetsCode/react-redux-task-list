import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";

//components
import TodoList from "./components/TodoList/TodoList";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, helvetica, sans-serif;
  color: #222222;
`;

const App = () => (
  <AppContainer>
    <TodoList />
  </AppContainer>
);

export default hot(module)(App);
