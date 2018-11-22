import React from 'react'

export default function ListItem(props) {
    const { onDeleteHandle } = props;
    const { task, id } = props.task;

    const onDelete = (id) => {
        return () => {
            onDeleteHandle(id)
        }
    }

    return (
        <div>
            <h2 style={{ display: 'inline', marginRight: "10px" }}>{task}</h2>
            <button style={{ display: 'inline', marginRight: "10px" }}>Edit</button>
            <button style={{ display: 'inline' }} onClick={onDelete(id)}>Delete</button>
        </div>
    )
}
