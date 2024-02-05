import React from 'react';
import ReactDOM from 'react-dom/client';

import data from '../data.json';

import ItemNote from './ItemNote.js';

export default function ListNote(props) {
  console.log(data);
  
  function handleClickItem(id) {
    console.log(id);
    props.setSelected((prevState) => {
      return id;
    });
  }

  const dataTags = data.map((item) => {
    let isSelected = false;
    if(item.id == props.selected) {
      isSelected = true;
    }
    return <ItemNote 
              key={item.id}
              id={item.id}
              title={item.title} 
              date={item.date} 
              selected={isSelected} 
              handleClickItem={handleClickItem} 
            />;
  });

  return (
    <div className="list-note">
      {dataTags}
		</div>
	)
}
