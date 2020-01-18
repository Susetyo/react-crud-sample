import React from 'react';

const ListItem = (props)=>{
    return( 
    <li className="list-group-item">
        {props.item.name} 
        <button
            onClick={props.editTodo} 
            className="btn btn-danger btn-sm ml-2">U</button>
        <button
            onClick={props.deleteTodos} 
            className="btn btn-danger btn-sm ml-2">X</button>
    </li>)
}

export default ListItem;