import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    onDeleteHandle = (id) => {
        this.props.onDeleteHandleDashboard(id);
    }

    render() {
        const { tasks } = this.props;
        return (
            <div>
                {tasks.map((task) => (
                    <ListItem task={task} key={task.id} onDeleteHandle={this.onDeleteHandle} />
                ))}
            </div>
        )
    }
}

export default List
