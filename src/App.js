import React, { Component } from 'react';
import './App.css';
import { Concept } from './ConceptTemplate';

function App(props) {
  const { content } = props;
  return (
    <Concept content={content} />
  );
}

export default App;
