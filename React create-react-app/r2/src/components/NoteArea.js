import React from 'react';
import ReactDOM from 'react-dom/client';

/*import '../styles/index.css';*/

import data from '../data.json';

export default function NoteArea({selected, updateNoteContent}) {
	let [noteContent, setNoteContent] = React.useState("");

  function handleOnChange(e) {
    console.log(e, e.nativeEvent.data, e.target.defaultValue)
    setNoteContent(e.target.value);
  }

  return (
    <div className="note-area">
      {selected} {data[selected - 1].title}
      <input type="text" className="note-content" value={noteContent} onChange={handleOnChange} />
    </div>
  )
}
