import React from 'react';

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return <div key={item.key} className="item">
            <p>
             <input style={{textDecoration: item.decoration}} value={item.text} id={item.key} onChange={(e) => props.setUpdate(e.target.value, item.key)} className="iteminput"/>
             <span className="delete" onClick={() => props.deleteItem(item.key)}>&#10799;</span>
             <span className="done" onClick={() => props.setDone(item.key)} style={{color: item.color}}>&#x02713;</span>
            </p>
           </div>
  })

  return(
    <div>{listItems}</div>
  )
}
export default ListItems;
