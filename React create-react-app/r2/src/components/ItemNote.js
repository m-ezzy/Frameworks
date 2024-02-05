import React from 'react';
import ReactDOM from 'react-dom/client';

export default function ItemNote({id, title, date, selected, handleClickItem}) {
  let style = {
    backgroundColor: "var(--bg-item)"
  };

  if (selected) {
    style.backgroundColor = "var(--bg-item-selected)";
  }

  return (
    <div className="item-note" style={style} onClick={() => handleClickItem(id)}>
      {title} {date}
    </div>
  )
}
