import React from 'react';

export const Person = (props) => {
    const style = {
        color: "red",
        border: "1px solid green",
        
    };
    return <>
        <p onClick={props.click} 
         style={style}>
             My Name is {props.name}
              and my age is {props.age} years old
               {props.children}</p>
        {props.status ? <> <label htmlFor={props.key}>change Name </label>
            <input type="text" id={props.key} onChange={props.changed} value={props.name}/></> : <></>}

    </>
}