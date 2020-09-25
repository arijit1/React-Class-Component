import React from 'react';

export const Person = (props) => {
    const style = {
        color: "red",
        border: "1px solid green",
        
    };
    return <>
        <p onClick={props.click}  style={style}>My Name is {props.name} and my age is {props.age} {props.children}</p>
        {props.status ? <> <label htmlFor="changeName">change Name for 3rd person</label>
            <input type="text" id="changeName" onChange={props.changeName} value={props.name}/></> : <></>}

    </>
}