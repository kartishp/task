import React, { Component } from 'react'
import List from '../List/List';
import AddTask from '../List/AddTask';

class Dashboard extends Component {
    state = {
        tasks: [
            { id: 1, task: "Learn Javascript" },
            { id: 2, task: "Learn React" },
            { id: 3, task: "Learn React native" }
        ]
    }

    // onClear(done) {
    //     this.setState({
    //         tasks: []
    //     })
    //     console.log(done)
    // }

    onClear = (done) => {
        return () => {
            this.setState({
                tasks: []
            })
            console.log(done);
        }
    }

    onDeleteHandleDashboard = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => (
                task.id !== id
            ))
        })
    }

    onAddHandleDashboard = (task) => {
        this.setState({
            tasks: [task, ...this.state.tasks]
        })
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <AddTask onAddHandleDashboard={this.onAddHandleDashboard} />
                <List tasks={tasks} onDeleteHandleDashboard={this.onDeleteHandleDashboard} />
                <button onClick={this.onClear('Clear')}>Clear All</button>
            </div >
        )
    }
}

export default Dashboard
