import React from 'react';

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return <div key={item.key}>
            <p>
             <input value={item.text} id={item.key} onChange={(e) => props.setUpdate(e.target.value, item.key)}/>
             <span onClick={() => props.deleteItem(item.key)}>&#10799;</span>
            </p>
           </div>
  })

  return(
    <div>{listItems}</div>
  )
}
export default ListItems;
