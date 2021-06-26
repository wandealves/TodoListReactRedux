import React, { useState } from "react";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import listReducer from './reduces/listReduce';

import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import List from "./components/List";

import "./Todo.css";

const store = createStore(listReducer);

function App() {
  const [showModal, setShowModal] = useState(false);
 
  function onHideModal() {
    setShowModal(false);
  }

  return (
    <div className="container">
    <Provider store={store}>
      <header className="header">
        <h1>Todo</h1>
        <button
          className="addButton"
          onClick={() => {
            setShowModal(true);
          }}
        >
          +
        </button>
      </header>
      <List></List>

      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onHideModal={onHideModal}></TodoForm>
      </Modal>
      </Provider>
    </div>
  );
}

export default App;
