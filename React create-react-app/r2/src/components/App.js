import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from '../logo.svg';

import '../styles/index_grid.css';
import '../styles/App.css';

import ListNote from '../components/ListNote.js'
import NoteArea from '../components/NoteArea.js'

function App() {
	let [selected, setSelected] = React.useState(1);

  return (
    <>
      <ListNote selected={selected} setSelected={setSelected} />
      <NoteArea selected={selected} />
    </>
  );
}

export default App;
